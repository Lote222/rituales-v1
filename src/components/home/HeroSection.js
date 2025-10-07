'use client';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-background overflow-hidden" style={{ clipPath: 'ellipse(100% 55% at 49% 45%)' }}>
      {/* Subtle background pattern/image can be placed here */}
      <div className="absolute inset-0 bg-[url('/backgroundHer.jpg')] bg-cover bg-center opacity-05"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-primary mb-6 leading-tight">
          <span className="block overflow-hidden">
            <span className="block animate-reveal-up" style={{ animationDelay: '0.1s' }}>
              Transforma tu Energía,
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block animate-reveal-up" style={{ animationDelay: '0.3s' }}>
              Manifiesta tus Deseos
            </span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-primary max-w-2xl mx-auto mb-10">
          Descubre el poder de nuestros rituales sagrados, diseñados para alinear tu espíritu con las fuerzas del universo y atraer la abundancia que mereces.
        </p>
        <Link href="#rituales" className="btn-primary">
          Descubrir Rituales
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;