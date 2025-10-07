'use client';

import { useState } from 'react';
import Image from 'next/image';
import TipModal from '@/components/ui/TipModal';

const tips = [
  {
    title: 'Cómo Limpiar tu Espacio con Salvia',
    excerpt: 'Aprende la técnica ancestral para purificar tu hogar de energías negativas y crear un ambiente de paz.',
    imageSrc: '/Salvia.png',
    content: 'Paso 1: Consigue un atado de salvia blanca. Paso 2: Enciéndelo con cuidado y deja que el humo sagrado impregne cada rincón de tu hogar, visualizando cómo la energía negativa se disipa.',
  },
  {
    title: 'La Magia de los Cuarzos: Elige tu Piedra',
    excerpt: 'Una guía completa para entender el poder de los cristales y cómo seleccionar el que mejor resuena contigo.',
    imageSrc: '/Piedra.png',
    content: 'Cada cristal tiene una vibración única. El cuarzo rosa atrae el amor, la amatista calma la mente y el citrino fomenta la abundancia. Sostén varios en tu mano y siente cuál te llama.',
  },
  {
    title: 'Ritual de Luna Nueva para Nuevos Comienzos',
    excerpt: 'Aprovecha la energía de la luna nueva para plantar tus intenciones y manifestar tus más grandes anhelos.',
    imageSrc: '/Comienzos.jpeg',
    content: 'Escribe en un papel todo lo que deseas atraer a tu vida. Enciende una vela blanca y lee tus intenciones en voz alta, sintiendo la emoción de ya haberlas conseguido. Guarda el papel en un lugar especial.',
  },
  {
    title: 'El Significado de las Velas por su Color',
    excerpt: 'Descubre qué color de vela usar en tus rituales para potenciar tus intenciones de amor, prosperidad o protección.',
    imageSrc: '/Significado.png',
    content: 'Rojo para la pasión, verde para la prosperidad, azul para la sanación, negro para la protección. La intención es la clave, el color es el catalizador.',
  },
  {
    title: '5 Hierbas Protectoras que no Pueden Faltar',
    excerpt: 'Conoce las hierbas más poderosas para crear escudos energéticos y mantener tu aura protegida.',
    imageSrc: '/Hierba.png',
    content: 'Ruda, romero, albahaca, laurel y mirra son tus aliadas. Puedes llevarlas contigo en un saquito, quemarlas como incienso o colocarlas en las entradas de tu casa.',
  },
  {
    title: 'Interpretando Señales del Universo',
    excerpt: 'Abre tu percepción para reconocer y entender los mensajes que el universo te envía a diario.',
    imageSrc: '/Universo.png',
    content: 'Plumas que aparecen en tu camino, secuencias numéricas repetitivas (11:11), canciones con mensajes significativos... El universo te habla constantemente. Solo necesitas aprender a escuchar.',
  },
];

const TipCard = ({ tip, onClick }) => (
  <div
    onClick={onClick}
    className="group bg-background/50 rounded-lg overflow-hidden border border-secondary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/10 cursor-pointer"
  >
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
);

const TipsPage = () => {
  const [selectedTip, setSelectedTip] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (tip) => {
    setSelectedTip(tip);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing the tip to allow for exit animation
    setTimeout(() => setSelectedTip(null), 300);
  };

  return (
    <>
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
                <TipCard key={index} tip={tip} onClick={() => handleOpenModal(tip)} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {isModalOpen && <TipModal tip={selectedTip} onClose={handleCloseModal} />}
    </>
  );
};

export default TipsPage;