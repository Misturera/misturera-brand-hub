CREATE TABLE public.candidatos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome_completo text NOT NULL,
  data_nascimento date NOT NULL,
  whatsapp text NOT NULL,
  bairro_cidade text NOT NULL,
  unidade_interesse text NOT NULL,
  vaga_interesse text NOT NULL,
  trabalha_fim_de_semana boolean NOT NULL,
  turnos text[] NOT NULL DEFAULT '{}',
  transporte text NOT NULL,
  disponibilidade_inicio text NOT NULL,
  tem_experiencia boolean NOT NULL,
  ultimo_trabalho text,
  motivacao text NOT NULL,
  situacao_cliente text NOT NULL,
  perfil_rotina text NOT NULL,
  curriculo_url text,
  consentimento_lgpd boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'novo',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.candidatos TO anon;
GRANT INSERT ON public.candidatos TO authenticated;
GRANT ALL ON public.candidatos TO service_role;

ALTER TABLE public.candidatos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer pessoa pode enviar candidatura"
ON public.candidatos FOR INSERT TO anon, authenticated
WITH CHECK (consentimento_lgpd = true AND status = 'novo');

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_candidatos_updated_at
BEFORE UPDATE ON public.candidatos
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();