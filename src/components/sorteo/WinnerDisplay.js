import { lotteryWinner } from '@/lib/mockData';
import { Star, Award, Gift } from 'lucide-react';

const WinnerDisplay = () => {
  return (
    <div className="relative bg-gradient-to-br from-secondary/20 to-background/50 p-8 rounded-xl border-2 border-primary/50 shadow-2xl shadow-primary/20 overflow-hidden text-center">
      <div className="absolute -top-4 -left-4 w-24 h-24 text-primary/10">
        <Star fill="currentColor" />
      </div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 text-primary/10 transform rotate-12">
        <Award fill="currentColor" />
      </div>

      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <Gift size={48} className="text-primary" strokeWidth={1.5} />
        </div>
        <h3 className="text-3xl font-serif font-bold text-foreground mb-2">¡Felicidades a nuestro Ganador!</h3>
        <p className="text-lg text-muted mb-6">{lotteryWinner.week}</p>

        <div className="bg-background/70 inline-block px-10 py-6 rounded-lg">
          <p className="text-4xl font-serif font-extrabold text-primary tracking-wider">
            {lotteryWinner.customerName}
          </p>
          <p className="text-muted mt-2">
            Factura: {lotteryWinner.invoiceNumber}
          </p>
        </div>
        <p className="text-muted mt-6 max-w-md mx-auto">
          Agradecemos tu confianza y te deseamos la mejor de las suertes. ¡Tu premio ya está en camino!
        </p>
      </div>
    </div>
  );
};

export default WinnerDisplay;