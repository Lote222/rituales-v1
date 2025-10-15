import { Lora, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
// FIX: Importamos la función real de Supabase y el proveedor de contexto.
import { getWebsiteConfig } from "@/lib/supabaseClient";
import { SiteConfigProvider } from "@/context/SiteConfigContext";

// Se eliminó la función getMockSiteConfig.

const lora = Lora({
  subsets: ["latin"],
  weight: ["600"],
  variable: '--font-serif',
  display: 'swap',
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: "Herbolaria Sagrada - Suministros Naturistas & Esencias Esotéricas",
  description: "Descubre el poder de la naturaleza con nuestros suministros naturistas y esencias esotéricas. Productos consagrados para manifestar, sanar y proteger tu energía.",
};

export default async function RootLayout({ children }) {
  // FIX: Se llama a la función real para obtener datos de Supabase.
  // Usamos el WEBSITE_SLUG del archivo .env.local para identificar qué configuración cargar.
  const siteConfig = await getWebsiteConfig(process.env.WEBSITE_SLUG);

  return (
    <html lang="es" className={`${lato.variable} ${lora.variable}`}>
      <body className="font-sans bg-background text-foreground">
        {/* FIX: Envolvemos la aplicación con el proveedor del contexto. */}
        {/* El valor 'siteConfig' ahora está disponible para todos los componentes hijos. */}
        <SiteConfigProvider value={siteConfig}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SiteConfigProvider>
      </body>
    </html>
  );
}