import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const body = await req.json().catch(() => ({}));
    const id = typeof body?.id === 'string' ? body.id : '';
    if (!UUID_RE.test(id)) return json({ error: 'id inválido' }, 400);

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: candidato, error } = await supabase
      .from('candidatos')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Erro ao ler candidato:', error.message);
      return json({ error: 'Falha ao ler candidato' }, 500);
    }
    if (!candidato) return json({ error: 'Candidato não encontrado' }, 404);

    const webhook = Deno.env.get('RH_WEBHOOK_URL');
    if (!webhook) {
      console.warn('RH_WEBHOOK_URL não configurado — notificação ignorada');
      return json({ notificado: false, motivo: 'webhook_nao_configurado' });
    }

    const observacoes = [
      `Unidade de interesse: ${candidato.unidade_interesse}`,
      `Turnos: ${(candidato.turnos ?? []).join(', ')}`,
      `Início: ${candidato.disponibilidade_inicio}`,
      `Motivação: ${candidato.motivacao}`,
      `Situação com cliente: ${candidato.situacao_cliente}`,
      `Perfil de rotina: ${candidato.perfil_rotina}`,
      `ID candidato: ${candidato.id}`,
    ].join('\n');

    const form = new FormData();
    form.append('nome', candidato.nome_completo);
    form.append('cargo_desejado', candidato.vaga_interesse);
    form.append('origem', 'site');
    form.append('observacoes', observacoes);
    if (candidato.whatsapp) form.append('telefone', candidato.whatsapp);
    if (candidato.bairro_cidade) form.append('cidade', candidato.bairro_cidade);

    // Anexa o currículo (arquivo privado) quando existir
    if (candidato.curriculo_url) {
      const { data: arquivo, error: downErr } = await supabase.storage
        .from('curriculos')
        .download(candidato.curriculo_url);
      if (downErr) {
        console.warn('Falha ao baixar currículo, enviando sem anexo:', downErr.message);
      } else if (arquivo) {
        const nomeArquivo = candidato.curriculo_url.split('/').pop() || 'curriculo.pdf';
        form.append('curriculo', arquivo, nomeArquivo);
      }
    }

    const res = await fetch(webhook, {
      method: 'POST',
      headers: {
        'x-captacao-token': Deno.env.get('RH_CAPTACAO_TOKEN') ?? '',
      },
      body: form,
    });

    const texto = await res.text();
    if (!res.ok) {
      console.error(`Webhook RH falhou [${res.status}]: ${texto}`);
      return json({ notificado: false, status: res.status, details: texto }, 200);
    }

    return json({ notificado: true });
  } catch (e) {
    console.error('notificar-rh erro:', e instanceof Error ? e.message : e);
    return json({ error: 'Erro inesperado' }, 500);
  }
});
