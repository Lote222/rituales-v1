import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Las variables de entorno de Supabase no están definidas.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Función auxiliar para obtener el ID del sitio web
async function getWebsiteIdBySlug(websiteSlug) {
  console.log(`[DEBUG] Buscando ID para el slug: ${websiteSlug}`);
  
  // Usamos .limit(1) para evitar errores si hay duplicados
  const { data, error } = await supabase
    .from('websites')
    .select('id')
    .eq('slug', websiteSlug)
    .limit(1);

  if (error) {
    console.error(`[DEBUG] Error al buscar el website ID:`, error.message);
    return null;
  }
  
  if (!data || data.length === 0) {
      console.error(`[DEBUG] No se encontró ningún sitio con el slug: ${websiteSlug}`);
      return null;
  }
  
  const websiteId = data[0].id;
  console.log(`[DEBUG] Website ID encontrado: ${websiteId}`);
  return websiteId;
}

// ... (getWebsiteConfig y getRitualsForSite no cambian)

// FIX: Función de Sorteo con logs de depuración
export async function getSorteoFortunaData(websiteSlug) {
  console.log('-------------------------------------------');
  console.log('[DEBUG] Iniciando getSorteoFortunaData...');
  
  const websiteId = await getWebsiteIdBySlug(websiteSlug);
  if (!websiteId) {
    console.error('[DEBUG] No se pudo obtener el websiteId. La función terminará.');
    return { latestPastDraw: null, nextFutureDraw: null, history: [] };
  }

  try {
    const now = new Date().toISOString();
    const today = now.split('T')[0];
    console.log(`[DEBUG] Fecha actual para la consulta: ${today}`);

    const [pastDrawsResult, nextFutureDrawResult] = await Promise.all([
      supabase
        .from('sorteos_fortuna')
        .select('*')
        .eq('website_id', websiteId)
        .lte('fecha_sorteo', today)
        .order('fecha_sorteo', { ascending: false })
        .limit(6),
      supabase
        .from('sorteos_fortuna')
        .select('*')
        .eq('website_id', websiteId)
        .gt('fecha_sorteo', today)
        .order('fecha_sorteo', { ascending: true })
        .limit(1)
        .single()
    ]);

    console.log('[DEBUG] Resultado de la consulta de sorteos pasados:', pastDrawsResult.data ? `${pastDrawsResult.data.length} registros.` : pastDrawsResult.error);
    console.log('[DEBUG] Resultado de la consulta de sorteo futuro:', nextFutureDrawResult.data ? '1 registro.' : nextFutureDrawResult.error?.message);

    const { data: pastDraws, error: pastError } = pastDrawsResult;
    const { data: nextFutureDraw, error: futureError } = nextFutureDrawResult;

    if (pastError) console.error("[DEBUG] Error detallado en sorteos pasados:", pastError.message);
    if (futureError && futureError.code !== 'PGRST116') {
      console.error("[DEBUG] Error detallado en sorteo futuro:", futureError.message);
    }
    
    const latestPastDraw = pastDraws?.[0] || null;
    const history = pastDraws?.slice(1, 6) || [];

    console.log('[DEBUG] Sorteo más reciente encontrado:', latestPastDraw ? 'Sí' : 'No');
    console.log(`[DEBUG] Historial encontrado: ${history.length} registros.`);
    console.log('-------------------------------------------');

    return { latestPastDraw, nextFutureDraw, history };
  } catch (error) {
    console.error('[DEBUG] Error inesperado en getSorteoFortunaData:', error.message);
    return { latestPastDraw: null, nextFutureDraw: null, history: [] };
  }
}

// Asegúrate de que las otras funciones estén aquí
export async function getWebsiteConfig(websiteSlug) {
    const websiteId = await getWebsiteIdBySlug(websiteSlug);
    if (!websiteId) return null;
    const { data, error } = await supabase.from('site_configurations').select('key, value').eq('website_id', websiteId);
    if (error) return null;
    return data.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {});
}

export async function getRitualsForSite(websiteSlug) {
    const websiteId = await getWebsiteIdBySlug(websiteSlug);
    if (!websiteId) return [];
    const { data, error } = await supabase.from('rituales').select('*').eq('website_id', websiteId).order('created_at', { ascending: true });
    if (error) return [];
    return data;
}