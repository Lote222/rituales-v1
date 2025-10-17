import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Las variables de entorno de Supabase no están definidas.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Función auxiliar para obtener el ID del sitio web
export async function getWebsiteIdBySlug(slug) {
  console.log(`[DEBUG] Buscando ID para el slug: ${slug}`);
  const { data, error } = await supabase
    .from('websites')
    .select('id')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`[DEBUG] Error buscando website ID para el slug ${slug}:`, error.message);
    return null;
  }
  console.log(`[DEBUG] Website ID encontrado: ${data.id}`);
  return data.id;
}


export async function getSorteoFortunaData(websiteSlug) {
  console.log('-------------------------------------------');
  console.log('[DEBUG] Iniciando getSorteoFortunaData...');
  
  const websiteId = await getWebsiteIdBySlug(websiteSlug);
  if (!websiteId) {
    console.error('[DEBUG] No se pudo obtener el websiteId. La función terminará.');
    return { latestPastDraw: null, nextFutureDraw: null, history: [] };
  }
  // FIX: Agregar este console.log para verificar el websiteId justo antes de las consultas
  console.log('[DEBUG] websiteId usado en consulta de sorteos:', websiteId); 

  try {
    const now = new Date();
    // Formatear la fecha a 'YYYY-MM-DD' para una comparación efectiva con columnas de tipo 'date'
    const today = now.toISOString().split('T')[0]; 
    console.log(`[DEBUG] Fecha actual para la consulta: ${today}`);

    const [pastDrawsResult, nextFutureDrawResult] = await Promise.all([
      supabase
        .from('sorteos_fortuna')
        .select('*')
        .eq('website_id', websiteId)
        .lte('fecha_sorteo', today) // Mantiene la lógica: menor o igual a hoy
        .order('fecha_sorteo', { ascending: false })
        .limit(6),
      supabase
        .from('sorteos_fortuna')
        .select('*')
        .eq('website_id', websiteId)
        .gt('fecha_sorteo', today) // Mantiene la lógica: mayor que hoy
        .order('fecha_sorteo', { ascending: true })
        .limit(1)
    ]);

    const { data: pastDraws, error: pastError } = pastDrawsResult;
    const { data: nextDraws, error: futureError } = nextFutureDrawResult;
    
    console.log('[DEBUG] Consulta de sorteos pasados resultados:', pastDraws ? `${pastDraws.length} registros.` : `Error: ${pastError?.message}`);
    console.log('[DEBUG] Consulta de sorteo futuro resultados:', nextDraws ? `${nextDraws.length} registros.` : `Error: ${futureError?.message}`);

    if (pastError) console.error("[DEBUG] Error detallado en sorteos pasados:", pastError.message);
    if (futureError) console.error("[DEBUG] Error detallado en sorteo futuro:", futureError.message);

    const latestPastDraw = pastDraws?.[0] || null;
    const history = pastDraws?.slice(1) || []; 

    const nextFutureDraw = nextDraws?.[0] || null;

    console.log('[DEBUG] Sorteo más reciente encontrado:', latestPastDraw ? 'Sí' : 'No');
    console.log('[DEBUG] Próximo sorteo encontrado:', nextFutureDraw ? 'Sí' : 'No');
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