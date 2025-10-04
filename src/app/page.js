import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import TrustSection from "@/components/home/TrustSection";
import Link from 'next/link';

const KnowledgeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
         <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Conocimiento Ancestral
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
          Explora nuestros consejos y secretos para potenciar tu práctica espiritual y atraer la buena fortuna a tu vida.
        </p>
        <Link href="/tips">
          <span className="border border-primary text-primary font-bold text-lg py-3 px-8 rounded-full hover:bg-primary hover:text-background hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer">
            Leer Nuestros Tips
          </span>
        </Link>
      </div>
    </section>
  );
};


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <TrustSection />
      <KnowledgeSection />
    </>
  );
}