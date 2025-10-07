import { lotteryWinner } from '@/lib/mockData';

const LaurelWreathIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M100 20C60 20 30 50 30 90c0 40 30 70 70 70s70-30 70-70c0-40-30-70-70-70zm0 130c-33 0-60-27-60-60s27-60 60-60 60 27 60 60-27 60-60 60z"
      fill="none"
    />
    <path
      d="M145.4 145.4c-12.4 12.4-28.8 19.5-46.4 19.5s-34-7.1-46.4-19.5c-2.5-2.5-2.5-6.6 0-9.2l9.2-9.2c2.5-2.5 6.6-2.5 9.2 0 7.8 7.8 18.2 12.1 29.4 12.1s21.6-4.3 29.4-12.1c2.5-2.5 6.6-2.5 9.2 0l9.2 9.2c2.5 2.5 2.5 6.6 0 9.2zM54.6 54.6c12.4-12.4 28.8-19.5 46.4-19.5s34 7.1 46.4 19.5c2.5 2.5 2.5 6.6 0 9.2l-9.2 9.2c-2.5 2.5-6.6 2.5-9.2 0-7.8-7.8-18.2-12.1-29.4-12.1s-21.6 4.3-29.4-12.1c-2.5-2.5-6.6-2.5-9.2 0l-9.2-9.2c-2.5-2.5-2.5-6.6 0-9.2z"
      fill="currentColor"
    />
    <path
      d="M100 40c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"
      fill="none"
    />
    <g transform="translate(100 100) scale(0.8)">
      <path
        d="M-31-69.5c-4.6-1.5-9.3-2.3-14-2.3-19.3 0-35 15.7-35 35s15.7 35 35 35c4.7 0 9.4-1 14-2.5"
        stroke="currentColor" strokeWidth="10" strokeLinecap="round" fill="none"
        transform="rotate(20)"
      />
      <path
        d="M31-69.5c4.6-1.5 9.3-2.3 14-2.3 19.3 0 35 15.7 35 35s-15.7 35-35 35c-4.7 0-9.4-1-14-2.5"
        stroke="currentColor" strokeWidth="10" strokeLinecap="round" fill="none"
        transform="scale(-1, 1) rotate(20)"
      />
    </g>
  </svg>
);


const WinnerDisplay = () => {
  return (
    <div className="relative bg-background/60 p-8 rounded-2xl ring-2 ring-inset ring-primary shadow-lg shadow-secondary/20 overflow-hidden text-center">

      <LaurelWreathIcon className="absolute inset-0 w-full h-full text-secondary/20 opacity-40 scale-125" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h3 className="text-xl font-serif tracking-widest text-muted uppercase">
          GANADORA DE LA SEMANA
        </h3>

        <p className="text-6xl font-serif font-bold text-primary my-4">
          Isabel C.
        </p>

        <p className="text-lg text-muted">
          Ha ganado: <span className="font-semibold text-foreground">Kit de Abundancia Completo</span>
        </p>

        <p className="text-muted mt-8 max-w-md mx-auto text-sm">
          ¡Felicidades, Isabel! Tu confianza en la magia ha sido recompensada. Tu premio ya está en camino para iluminar tu vida.
        </p>
      </div>
    </div>
  );
};

export default WinnerDisplay;