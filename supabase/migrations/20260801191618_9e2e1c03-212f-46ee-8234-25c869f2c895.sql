DROP POLICY IF EXISTS "azgallery public read" ON storage.objects;
DROP POLICY IF EXISTS "azgallery admin read" ON storage.objects;
DROP POLICY IF EXISTS "azgallery admin write" ON storage.objects;
DROP POLICY IF EXISTS "azgallery admin update" ON storage.objects;
DROP POLICY IF EXISTS "azgallery admin delete" ON storage.objects;

CREATE POLICY "azgallery admin read"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'azgallery' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "azgallery admin write"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'azgallery' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "azgallery admin update"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'azgallery' AND public.has_role(auth.uid(), 'admin'))
WITH CHECK (bucket_id = 'azgallery' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "azgallery admin delete"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'azgallery' AND public.has_role(auth.uid(), 'admin'));