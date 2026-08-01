-- 1) Hide commenter email from public/authenticated reads (column-level privileges)
REVOKE SELECT ON public.comments FROM anon, authenticated;
GRANT SELECT (id, created_at, image_id, user_id, name, content, is_approved) ON public.comments TO anon, authenticated;
GRANT ALL ON public.comments TO service_role;

-- 2) Replace always-true insert policy on leads with validated checks
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;
CREATE POLICY "Anyone can submit a validated lead"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  name IS NOT NULL AND length(btrim(name)) BETWEEN 2 AND 120
  AND email IS NOT NULL AND length(email) <= 320 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (phone IS NULL OR length(phone) <= 40)
  AND (project_type IS NULL OR length(project_type) <= 80)
  AND (message IS NULL OR length(message) <= 5000)
  AND (lang IS NULL OR lang IN ('ar','en'))
);