import Image from 'next/image';
import Link from 'next/link';

const tips = [
  {
    title: 'Cómo Limpiar tu Espacio con Salvia',
    excerpt: 'Aprende la técnica ancestral para purificar tu hogar de energías negativas y crear un ambiente de paz.',
    imageSrc: '/tip_placeholder_1.jpg',
    href: '#',
  },
  {
    title: 'La Magia de los Cuarzos: Elige tu Piedra',
    excerpt: 'Una guía completa para entender el poder de los cristales y cómo seleccionar el que mejor resuena contigo.',
    imageSrc: '/tip_placeholder_2.jpg',
    href: '#',
  },
  {
    title: 'Ritual de Luna Nueva para Nuevos Comienzos',
    excerpt: 'Aprovecha la energía de la luna nueva para plantar tus intenciones y manifestar tus más grandes anhelos.',
    imageSrc: '/tip_placeholder_3.jpg',
    href: '#',
  },
  {
    title: 'El Significado de las Velas por su Color',
    excerpt: 'Descubre qué color de vela usar en tus rituales para potenciar tus intenciones de amor, prosperidad o protección.',
    imageSrc: '/tip_placeholder_4.jpg',
    href: '#',
  },
  {
    title: '5 Hierbas Protectoras que no Pueden Faltar',
    excerpt: 'Conoce las hierbas más poderosas para crear escudos energéticos y mantener tu aura protegida.',
    imageSrc: '/tip_placeholder_5.jpg',
    href: '#',
  },
  {
    title: 'Interpretando Señales del Universo',
    excerpt: 'Abre tu percepción para reconocer y entender los mensajes que el universo te envía a diario.',
    imageSrc: '/tip_placeholder_6.jpg',
    href: '#',
  },
];

const TipCard = ({ tip }) => (
  <Link href={tip.href}>
    <div className="group bg-background/50 rounded-lg overflow-hidden border border-secondary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/10 cursor-pointer">
      <div className="relative w-full h-56">
        <Image
          src={tip.imageSrc}
          alt={`Imagen para el tip: ${tip.title}`}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-primary mb-2 h-14 group-hover:text-yellow-300">
          {tip.title}
        </h3>
        <p className="text-muted text-sm line-clamp-3 h-[60px]">
          {tip.excerpt}
        </p>
      </div>
    </div>
  </Link>
);

const TipsPage = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="relative py-20 md:py-32 text-center bg-cover bg-center" style={{backgroundImage: "url('/mystical-background.jpg')"}}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">Tips para la Buena Suerte</h1>
          <p className="text-lg md:text-xl text-muted mt-4 max-w-3xl mx-auto">
            Sumérgete en el conocimiento ancestral y descubre prácticas para enriquecer tu vida espiritual.
          </p>
        </div>
      </section>

      {/* Tips Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {tips.map((tip, index) => (
              <TipCard key={index} tip={tip} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TipsPage;