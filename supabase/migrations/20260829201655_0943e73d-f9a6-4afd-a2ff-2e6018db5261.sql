CREATE POLICY "Envio publico de curriculos"
ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (bucket_id = 'curriculos');