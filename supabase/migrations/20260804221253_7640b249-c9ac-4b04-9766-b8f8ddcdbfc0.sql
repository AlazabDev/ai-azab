-- Chat tables: server-only access (edge function uses service_role)
REVOKE ALL ON public.chat_threads FROM anon, authenticated;
REVOKE ALL ON public.chat_messages FROM anon, authenticated;
GRANT ALL ON public.chat_threads TO service_role;
GRANT ALL ON public.chat_messages TO service_role;

ALTER TABLE public.chat_threads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "No direct client access to chat threads" ON public.chat_threads;
CREATE POLICY "No direct client access to chat threads"
ON public.chat_threads FOR ALL TO anon, authenticated
USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "No direct client access to chat messages" ON public.chat_messages;
CREATE POLICY "No direct client access to chat messages"
ON public.chat_messages FOR ALL TO anon, authenticated
USING (false) WITH CHECK (false);

-- model_pricing: admin-only reads
DO $$
DECLARE p record;
BEGIN
  FOR p IN SELECT policyname FROM pg_policies WHERE schemaname='public' AND tablename='model_pricing' LOOP
    EXECUTE format('DROP POLICY %I ON public.model_pricing', p.policyname);
  END LOOP;
END $$;

REVOKE ALL ON public.model_pricing FROM anon;
GRANT SELECT ON public.model_pricing TO authenticated;
GRANT ALL ON public.model_pricing TO service_role;

CREATE POLICY "Admins can read model pricing"
ON public.model_pricing FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));