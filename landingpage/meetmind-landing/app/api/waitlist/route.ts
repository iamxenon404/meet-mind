import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// 1. Force this route to be dynamic so it doesn't run during build time
export const dynamic = 'force-dynamic';

// 2. Initialize with fallbacks to prevent "supabaseKey is required" build error
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(req: Request) {
  try {
    // 3. Safety check: If keys are missing at runtime, return a clean error
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const { error } = await supabase
      .from('waitlist')
      .insert([{ 
        email, 
        source: 'landing_page_hero',
        created_at: new Date().toISOString() 
      }]);

    if (error) {
      console.error('Supabase Error:', error);
      throw error;
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}