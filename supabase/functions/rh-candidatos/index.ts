import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { createClient } from 'npm:@supabase/supabase-js@2'

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

const STATUS_VALIDOS = ['novo', 'em_analise', 'entrevista', 'aprovado', 'reprovado', 'banco_talentos']

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  const apiKey = Deno.env.get('RH_API_KEY')
  const provided = req.headers.get('x-api-key') ?? req.headers.get('authorization')?.replace(/^Bearer\s+/i, '')
  if (!apiKey || provided !== apiKey) return json({ error: 'Não autorizado' }, 401)

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  )

  const url = new URL(req.url)
  // caminho após /rh-candidatos
  const seg = url.pathname.split('/').filter(Boolean)
  const idx = seg.indexOf('rh-candidatos')
  const rest = idx >= 0 ? seg.slice(idx + 1) : []

  try {
    // GET /rh-candidatos/:id/curriculo -> link temporário do arquivo
    if (req.method === 'GET' && rest.length === 2 && rest[1] === 'curriculo') {
      const { data, error } = await supabase
        .from('candidatos')
        .select('curriculo_url')
        .eq('id', rest[0])
        .maybeSingle()
      if (error) throw error
      if (!data?.curriculo_url) return json({ error: 'Candidato sem currículo' }, 404)
      const signed = await supabase.storage
        .from('curriculos')
        .createSignedUrl(data.curriculo_url, 60 * 10)
      if (signed.error) throw signed.error
      return json({ url: signed.data.signedUrl, expira_em_segundos: 600 })
    }

    // GET /rh-candidatos/:id
    if (req.method === 'GET' && rest.length === 1) {
      const { data, error } = await supabase
        .from('candidatos')
        .select('*')
        .eq('id', rest[0])
        .maybeSingle()
      if (error) throw error
      if (!data) return json({ error: 'Não encontrado' }, 404)
      return json({ candidato: data })
    }

    // GET /rh-candidatos  (filtros: status, unidade, vaga, desde, busca, limit, offset)
    if (req.method === 'GET') {
      const p = url.searchParams
      const limit = Math.min(Number(p.get('limit') ?? 50) || 50, 200)
      const offset = Math.max(Number(p.get('offset') ?? 0) || 0, 0)

      let q = supabase
        .from('candidatos')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1)

      if (p.get('status')) q = q.eq('status', p.get('status')!)
      if (p.get('unidade')) q = q.eq('unidade_interesse', p.get('unidade')!)
      if (p.get('vaga')) q = q.eq('vaga_interesse', p.get('vaga')!)
      if (p.get('desde')) q = q.gte('created_at', p.get('desde')!)
      if (p.get('busca')) {
        const b = p.get('busca')!.replace(/[%,]/g, '')
        q = q.or(`nome_completo.ilike.%${b}%,whatsapp.ilike.%${b}%,bairro_cidade.ilike.%${b}%`)
      }

      const { data, error, count } = await q
      if (error) throw error
      return json({ total: count ?? 0, limit, offset, candidatos: data ?? [] })
    }

    // PATCH /rh-candidatos/:id  { status }
    if (req.method === 'PATCH' && rest.length === 1) {
      const body = await req.json().catch(() => null) as { status?: string } | null
      if (!body?.status || !STATUS_VALIDOS.includes(body.status)) {
        return json({ error: `status inválido. Use um de: ${STATUS_VALIDOS.join(', ')}` }, 400)
      }
      const { data, error } = await supabase
        .from('candidatos')
        .update({ status: body.status })
        .eq('id', rest[0])
        .select()
        .maybeSingle()
      if (error) throw error
      if (!data) return json({ error: 'Não encontrado' }, 404)
      return json({ candidato: data })
    }

    return json({ error: 'Rota ou método não suportado' }, 405)
  } catch (e) {
    console.error('rh-candidatos', e)
    return json({ error: 'Erro interno' }, 500)
  }
})
