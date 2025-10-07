import { lotteryParticipants } from '@/lib/mockData';
import { ShieldCheck } from 'lucide-react';

const ParticipantsList = () => {
  return (
    <div className="bg-background/50 border border-secondary/20 rounded-lg p-8 mt-16">
      <h3 className="text-3xl font-serif font-bold text-center text-foreground mb-8">
        Muro de la Abundancia
      </h3>
      <p className="text-center text-muted mb-10 max-w-2xl mx-auto">
        Estos son los valientes que han depositado su confianza en nuestros rituales durante la última semana. Cada compra es un paso hacia la manifestación y una oportunidad de ganar.
      </p>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-x-6">
        {lotteryParticipants.map((participant, index) => (
          <div key={index} className="flex items-center bg-background/30 p-3 rounded-md mb-4 break-inside-avoid transition-all duration-200 ease-in-out hover:bg-secondary hover:scale-105 cursor-pointer">
            <ShieldCheck className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
            <span className="text-muted truncate">{participant.customerName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipantsList;