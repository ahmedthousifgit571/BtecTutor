import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client used for uploading KTU documents (PDFs) to
 * Storage. Uses the service-role key, so this module must ONLY be imported from
 * server code (API routes / server components) — never from the browser.
 */

export const KTU_DOCS_BUCKET = "ktu-docs";

let cached: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (cached) return cached;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env"
    );
  }

  cached = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}

/**
 * Upload a file buffer to the ktu-docs bucket and return its public URL.
 * Overwrites any existing file at the same path (upsert).
 */
export async function uploadKtuDoc(
  filePath: string,
  body: Buffer,
  contentType: string
): Promise<string> {
  const supabase = getSupabaseAdmin();

  const { error } = await supabase.storage
    .from(KTU_DOCS_BUCKET)
    .upload(filePath, body, { contentType, upsert: true });

  if (error) {
    throw new Error(`Supabase upload failed: ${error.message}`);
  }

  const { data } = supabase.storage.from(KTU_DOCS_BUCKET).getPublicUrl(filePath);
  return data.publicUrl;
}
