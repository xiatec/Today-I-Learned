
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://utixqfwanlepsxkehune.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0aXhxZndhbmxlcHN4a2VodW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2ODQzNTUsImV4cCI6MjAwNDI2MDM1NX0.hdXyJ68Y2oj-YW4OhZqo448X4dRV43rOm9iwaQJriOo"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase