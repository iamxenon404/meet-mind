import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// If keys are missing, we log a warning but DON'T throw an error.
// This allows the Vercel build process to complete successfully.
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("⚠️ Supabase credentials missing. Client initialized with empty strings.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);  