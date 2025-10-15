// FIX: No longer importing from mockData
// import { lotteryWinner } from '@/lib/mockData';

const LaurelWreathIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g transform="translate(100 100) scale(0.8)">
      <path
        d="M-31-69.5c-4.6-1.5-9.3-2.3-14-2.3-19.3 0-35 15.7-35 35s15.7 35 35 35c4.7 0 9.4-1 14-2.5"
        stroke="currentColor" strokeWidth="10" strokeLinecap="round" fill="none"
        transform="rotate(20)"
      />
      <path
        d="M31-69.5c4.6-1.5 9.3-2.3 14-2.3-19.3 0 35 15.7 35 35s-15.7 35-35 35c-4.7 0-9.4-1-14-2.5"
        stroke="currentColor" strokeWidth="10" strokeLinecap="round" fill="none"
        transform="scale(-1, 1) rotate(20)"
      />
    </g>
  </svg>
);


// FIX: The component now receives the winner as a prop
const WinnerDisplay = ({ winner }) => {
  // FIX: Use the winner data from props, or show a default message.
  const winnerName = winner?.nombre_ganador || 'Isabel C.';
  const prizeName = winner?.nombre_premio || 'Kit de Abundancia Completo';

  return (
    <div className="relative bg-background/60 p-8 rounded-2xl ring-2 ring-inset ring-primary shadow-lg shadow-secondary/20 overflow-hidden text-center">

      <LaurelWreathIcon className="absolute inset-0 w-full h-full text-secondary/20 opacity-40 scale-125" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h3 className="text-xl font-serif tracking-widest text-muted uppercase">
          GANADORA DE LA SEMANA
        </h3>

        <p className="text-6xl font-serif font-bold text-primary my-4">
          {winnerName}
        </p>

        <p className="text-lg text-muted">
          Ha ganado: <span className="font-semibold text-foreground">{prizeName}</span>
        </p>

        <p className="text-muted mt-8 max-w-md mx-auto text-sm">
          ¡Felicidades! Tu confianza en la magia ha sido recompensada. Tu premio ya está en camino para iluminar tu vida.
        </p>
      </div>
    </div>
  );
};

export default WinnerDisplay;