import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lmdanpzimmcwjtazgkjr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtZGFucHppbW1jd2p0YXpna2pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4ODcwNzcsImV4cCI6MjAzODQ2MzA3N30.Bexd-iXoJ2U_I--tahXY0sa9zWTotwqC9gh1wSdwwFw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
