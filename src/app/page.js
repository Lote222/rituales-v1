// lote222/rituales-v1/rituales-v1-4a7fea06377fcea43204408b8c844ab5b1c579fe/src/app/page.js
import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import WinnerHighlight from "@/components/home/WinnerHighlight";
import TrustSection from "@/components/home/TrustSection";
import FaqSection from "@/components/home/FaqSection";
import Link from 'next/link';
import { getSorteoFortunaData, getRitualsForSite } from "@/lib/supabaseClient";

// FIX: Se añade esta línea para forzar el renderizado dinámico.
// EXPLANATION: Esto le dice a Next.js que no guarde en caché esta página y que
// la regenere en cada solicitud, asegurando que siempre tengamos los datos más frescos
// de la base de datos.
export const dynamic = 'force-dynamic';

const KnowledgeSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6 text-center">
       <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
        Conocimiento Ancestral
      </h2>
      <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
        Explora nuestros consejos y secretos para potenciar tu práctica espiritual.
      </p>
      <Link href="/tips">
        <span className="border border-primary text-primary font-bold text-lg py-3 px-8 rounded-full hover:bg-primary hover:text-background transition-all duration-300 cursor-pointer">
          Leer Nuestros Tips
        </span>
      </Link>
    </div>
  </section>
);

export default async function HomePage() {
  const { latestPastDraw, nextFutureDraw } = await getSorteoFortunaData(process.env.WEBSITE_SLUG);
  const rituals = await getRitualsForSite(process.env.WEBSITE_SLUG);

  return (
    <>
      <HeroSection />
      <ProductsSection rituals={rituals} />
      <WinnerHighlight latestPastDraw={latestPastDraw} nextFutureDraw={nextFutureDraw} />
      <TrustSection />
      <KnowledgeSection />
      <FaqSection />
    </>
  );
}