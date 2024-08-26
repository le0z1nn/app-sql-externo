// supabaseClient.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yhnhmobdtxhggncglefq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlobmhtb2JkdHhoZ2duY2dsZWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NzU3MzksImV4cCI6MjAzODQ1MTczOX0.3uTnmLd8vNcRry6FowKoQgCvKlbnzZMZ7ZjPdgIMboE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
});
