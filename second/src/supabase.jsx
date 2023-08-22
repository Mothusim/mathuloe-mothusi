
import { createClient } from '@supabase/supabase-js'

// Use a custom domain as the supabase URL
const supabase = createClient('https://mkgcgxyvnomhfhkpiyjy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2NneHl2bm9taGZoa3BpeWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyODA5OTcsImV4cCI6MjAwNzg1Njk5N30._a50IRBJGQe38aPRdaF2BPOWDuWrBaV_VBkHhFU6x4U')

export default supabase