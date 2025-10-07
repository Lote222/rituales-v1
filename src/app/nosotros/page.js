import Image from 'next/image';
import { Heart, Target, Eye } from 'lucide-react';

const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-background/50 p-8 rounded-lg border border-secondary/20 text-center">
    <div className="flex justify-center mb-4 text-primary">{icon}</div>
    <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted leading-relaxed">{children}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="relative py-20 md:py-32 text-center bg-cover bg-center" style={{backgroundImage: "url('/mystical-background.jpg')"}}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">Sobre Nosotros</h1>
          <p className="text-lg md:text-xl text-muted mt-4 max-w-3xl mx-auto">
            Descubre la historia, la misión y la pasión que impulsan Herbolaria Sagrada.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-serif text-primary mb-4">Nuestra Historia</h2>
              <p className="text-muted leading-loose mb-4">
                Herbolaria Sagrada nació de una profunda vocación por reconectar con la sabiduría ancestral en un mundo moderno y acelerado. Su fundadora, Isabella &quot;Luna&quot; Valeriano, emprendió un viaje personal a través de diversas tradiciones místicas, descubriendo el poder transformador de los rituales cuando se realizan con intención, respeto y autenticidad.
              </p>
              <p className="text-muted leading-loose">
                Lo que comenzó como una práctica personal, floreció en una misión: crear un santuario para almas buscadoras. Un lugar donde la magia no es un truco, sino una herramienta sagrada para el autoconocimiento, la sanación y la manifestación consciente. Cada producto que ofrecemos es un reflejo de este viaje, cuidadosamente seleccionado y consagrado.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
               <div className="relative w-full max-w-md h-96 rounded-lg overflow-hidden border-4 border-secondary/30 shadow-2xl shadow-secondary/20">
                <Image
                  src="/Historia.png" // Placeholder for an aesthetic image
                  alt="Ingredientes sagrados para rituales"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Mission & Vision Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Nuestro Compromiso
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Heart size={40} />} title="Autenticidad">
              Ofrecer solo productos y herramientas esotéricas de la más alta calidad, energéticamente puros y preparados con respeto por las tradiciones ancestrales.
            </FeatureCard>
            <FeatureCard icon={<Target size={40} />} title="Misión">
              Empoderarte en tu camino espiritual, proveyendo rituales que sirven como catalizadores para el cambio positivo, la abundancia y el bienestar integral.
            </FeatureCard>
            <FeatureCard icon={<Eye size={40} />} title="Visión">
              Ser un faro de luz y conocimiento en la comunidad esotérica, fomentando un espacio de confianza, aprendizaje y crecimiento espiritual para todos.
            </FeatureCard>
          </div>
        </div>
      </section>

       {/* Founder Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="flex justify-center mb-6">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/50">
              <Image
                src="/Luna.png"
                alt="Isabella 'Luna' Valeriano"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <h2 className="text-3xl font-serif text-primary mb-2">Isabella &quot;Luna&quot; Valeriano</h2>
          <h3 className="text-xl text-muted font-semibold mb-4">Fundadora y Guía Espiritual</h3>
          <p className="text-muted leading-relaxed">
            Con más de 15 años de estudio en tarot, astrología y prácticas chamánicas, Luna dedica su vida a hacer accesible la sabiduría esotérica. Su enfoque combina el conocimiento ancestral con una perspectiva moderna y compasiva, guiando a otros a descubrir su propio poder interior.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;