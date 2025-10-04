import { createClient } from '@supabase/supabase-js';

// It's recommended to place these in your .env.local file
// and expose them to the browser using the NEXT_PUBLIC_ prefix.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be defined in environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Fetches the website configuration from Supabase.
 * @param {string} websiteSlug - The slug of the website to fetch config for.
 * @returns {Promise<object | null>} The website configuration object or null if not found.
 */
export async function getWebsiteConfig(websiteSlug) {
  try {
    const { data, error } = await supabase
      .from('websites')
      .select('config')
      .eq('slug', websiteSlug)
      .single();

    if (error) {
      console.error('Error fetching website config:', error.message);
      return null;
    }

    return data ? data.config : null;
  } catch (error) {
    console.error('An unexpected error occurred:', error.message);
    return null;
  }
}