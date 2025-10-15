import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Las variables de entorno de Supabase no están definidas.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Fetches the website configuration from Supabase.
 * @param {string} websiteSlug - The slug of the website to fetch config for.
 * @returns {Promise<object | null>} The website configuration object or null if not found.
 */
export async function getWebsiteConfig(websiteSlug) {
  try {
    const { data: websiteData, error: websiteError } = await supabase
      .from('websites')
      .select('id')
      .eq('slug', websiteSlug)
      .limit(1) // Soluciona el error de resultados duplicados
      .single();

    if (websiteError) {
      console.error('Error fetching website ID:', websiteError.message);
      return null;
    }
    
    if (!websiteData) {
        console.error(`No website found with slug: ${websiteSlug}`);
        return null;
    }

    // Usamos el nombre correcto de la tabla: "site_configurations"
    const { data, error } = await supabase
      .from('site_configurations')
      .select('key, value')
      .eq('website_id', websiteData.id);

    if (error) {
      console.error('Error fetching website config:', error.message);
      return null;
    }

    const config = data.reduce((acc, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {});

    return config;

  } catch (error) {
    console.error('An unexpected error occurred en getWebsiteConfig:', error.message);
    return null;
  }
}

// La función getLatestWinner() se ha eliminado para usar los datos mock.