import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ddyfzjvrpxzzazxuewdz.supabase.co";

// TRY IT BITCH :)
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkeWZ6anZycHh6emF6eHVld2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4OTYxMjIsImV4cCI6MjAxODQ3MjEyMn0.33vSy6Q6-C1tGEy58jACc_z3asTbysipOQdU4IU26zI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
