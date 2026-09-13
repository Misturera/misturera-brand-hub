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

    const payload = {
      nome: candidato.nome_completo,
      cargo_desejado: candidato.vaga_interesse,
      origem: 'site',
      telefone: candidato.whatsapp,
      cidade: candidato.bairro_cidade,
      observacoes: [
        `Unidade de interesse: ${candidato.unidade_interesse}`,
        `Turnos: ${(candidato.turnos ?? []).join(', ')}`,
        `Início: ${candidato.disponibilidade_inicio}`,
        `Motivação: ${candidato.motivacao}`,
        `Situação com cliente: ${candidato.situacao_cliente}`,
        `Perfil de rotina: ${candidato.perfil_rotina}`,
        candidato.curriculo_url ? `Currículo: ${candidato.curriculo_url}` : null,
        `ID candidato: ${candidato.id}`,
      ].filter(Boolean).join('\n'),
    };

    const res = await fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-captacao-token': Deno.env.get('RH_CAPTACAO_TOKEN') ?? '',
      },
      body: JSON.stringify(payload),
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
