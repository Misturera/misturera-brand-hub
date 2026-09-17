ALTER TABLE public.candidatos ADD COLUMN IF NOT EXISTS maior_de_18 boolean;

ALTER TABLE public.candidatos ALTER COLUMN data_nascimento DROP NOT NULL;
ALTER TABLE public.candidatos ALTER COLUMN transporte DROP NOT NULL;
ALTER TABLE public.candidatos ALTER COLUMN situacao_cliente DROP NOT NULL;
ALTER TABLE public.candidatos ALTER COLUMN perfil_rotina DROP NOT NULL;
ALTER TABLE public.candidatos ALTER COLUMN motivacao DROP NOT NULL;