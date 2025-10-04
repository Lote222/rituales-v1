import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// Mock fetching function for site config. In a real app, this would be
// replaced with the actual call to `getWebsiteConfig` from `supabaseClient.js`.
async function getMockSiteConfig() {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 50));
  return {
    whatsapp_number: "+1234567890", // Example number
    email_contact: "contacto@rituales-esotericos.com",
    phone_contact: "987-654-3210",
    website_slug: process.env.WEBSITE_SLUG,
  };
}

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
});

export const metadata = {
  title: "Rituales Esotéricos - Transforma tu Energía",
  description: "Descubre rituales sagrados y productos esotéricos de alta calidad para manifestar tus deseos, atraer abundancia y proteger tu energía.",
};

export default async function RootLayout({ children }) {
  const siteConfig = await getMockSiteConfig();

  return (
    <html lang="es" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <body className="font-sans bg-background text-foreground">
        <Navbar
          whatsappNumber={siteConfig.whatsapp_number}
        />
        <main>{children}</main>
        <Footer
          email={siteConfig.email_contact}
          phone={siteConfig.phone_contact}
        />
      </body>
    </html>
  );
}