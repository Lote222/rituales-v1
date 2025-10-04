import WinnerDisplay from '@/components/sorteo/WinnerDisplay';
import ParticipantsList from '@/components/sorteo/ParticipantsList';
import Link from 'next/link';

const LotteryPage = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="relative py-20 md:py-32 text-center bg-cover bg-center" style={{backgroundImage: "url('/mystical-background.jpg')"}}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
            Círculo de la Suerte
          </h1>
          <p className="text-lg md:text-xl text-muted mt-4 max-w-3xl mx-auto">
            Celebramos la confianza y la energía que depositas en nuestro universo. Cada semana, un cliente afortunado es elegido.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <WinnerDisplay />
          <ParticipantsList />

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              ¿Quieres ser el próximo?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              Cada ritual que adquieres no solo te acerca a tus metas, sino que también te inscribe automáticamente en nuestro Círculo de la Suerte semanal.
            </p>
            <Link href="/#rituales">
              <span className="bg-primary text-background font-bold text-lg py-4 px-8 rounded-full hover:bg-yellow-300 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 inline-block cursor-pointer">
                Compra tu Ritual y Participa
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LotteryPage;