import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import WinnerHighlight from "@/components/home/WinnerHighlight";
import TrustSection from "@/components/home/TrustSection";
import FaqSection from "@/components/home/FaqSection";
import Link from 'next/link';
// FIX: Importamos las funciones actualizadas
import { getSorteoFortunaData, getRitualsForSite } from "@/lib/supabaseClient";

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
  // FIX: Obtenemos todos los datos necesarios en el Server Component
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