import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Add these logs temporarily
console.log("Supabase URL exists:", !!supabaseUrl);
console.log("Supabase Key exists:", !!supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase credentials are missing! Check your .env.local file.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);