import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

// Use default values if environment variables are not available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://supabase-demo.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdXB0cHBsZnZpaWZyYndtbXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk4ODc2MDQsImV4cCI6MjAwNTQ2MzYwNH0.SZLqryz_-J3MhIFcWUEVhw9GJB5lDTgKBHzOKJnlD_c';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);