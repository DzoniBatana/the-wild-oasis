import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://duqmrfahddtmzzgfieux.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1cW1yZmFoZGR0bXp6Z2ZpZXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMjk0ODEsImV4cCI6MjA1NjYwNTQ4MX0.-rcNOtd05Bvk6kpVOnZ1vMkwPPVqtcNGVFNwa_RrHKU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
