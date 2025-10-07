'use client';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-background overflow-hidden">
      {/* Subtle background pattern/image can be placed here */}
      <div className="absolute inset-0 bg-[url('/mystical.png')] bg-cover bg-center opacity-9"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-foreground mb-6 leading-tight shadow-secondary/50 text-shadow-lg">
          Transforma tu Energía,<br /> Manifiesta tus Deseos
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
          Descubre el poder de nuestros rituales sagrados, diseñados para alinear tu espíritu con las fuerzas del universo y atraer la abundancia que mereces.
        </p>
        <Link href="#rituales">
          <span className="bg-primary text-background font-bold text-lg py-4 px-8 rounded-full hover:bg-yellow-300 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 inline-block cursor-pointer">
            Descubrir Rituales
          </span>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;