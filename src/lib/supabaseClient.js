import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be defined in environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getWebsiteConfig(websiteSlug) {
  try {
    // ==================================================================
    // LA CORRECCIÓN ESTÁ AQUÍ
    // Se añade .limit(1) para asegurar que solo obtenemos un resultado,
    // incluso si hay duplicados en la base de datos.
    // ==================================================================
    const { data: websiteData, error: websiteError } = await supabase
      .from('websites')
      .select('id')
      .eq('slug', websiteSlug)
      .limit(1) // <-- ESTA ES LA LÍNEA QUE SOLUCIONA EL ERROR
      .single();

    if (websiteError) {
      console.error('Error fetching website ID:', websiteError.message);
      return null;
    }
    
    if (!websiteData) {
        console.error(`No website found with slug: ${websiteSlug}`);
        return null;
    }

    const { data, error } = await supabase
      .from('website_config')
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
    console.error('An unexpected error occurred:', error.message);
    return null;
  }
}