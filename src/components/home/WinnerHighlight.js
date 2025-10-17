'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Componente del Contador
const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    // La hora del sorteo es a las 6 PM hora Colombia (UTC-5)
    const targetTime = new Date(`${targetDate}T18:00:00-05:00`);
    const difference = +targetTime - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
    if (isNaN(value)) return null;
    return (
      <div key={interval} className="text-center">
        <span className="text-4xl md:text-5xl font-bold text-primary">{String(value).padStart(2, '0')}</span>
        <span className="block text-sm uppercase text-muted">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center gap-6 md:gap-10">
      {timerComponents.length ? timerComponents : <span>¡El sorteo ha comenzado!</span>}
    </div>
  );
};

// Componente para las bolas de números (versión pequeña para la home)
const NumberBall = ({ number, isLucky }) => (
  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg shadow-md ${isLucky ? 'bg-yellow-400 text-gray-900' : 'bg-blue-600 text-white'}`}>
    {number}
  </div>
);

const WinnerHighlight = ({ latestPastDraw, nextFutureDraw }) => {
  // Caso 1: Hay un sorteo futuro programado. Muestra el contador.
  if (nextFutureDraw) {
    return (
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Próximo Sorteo de la Fortuna
          </h2>
          <p className="text-2xl font-serif text-yellow-400 mb-8">
            {nextFutureDraw.monto_premio || 'Un Premio Increíble'}
          </p>
          <div className="max-w-2xl mx-auto">
            <CountdownTimer targetDate={nextFutureDraw.fecha_sorteo} />
          </div>
          <p className="text-muted mt-8 max-w-lg mx-auto">
            Cada compra es un boleto dorado a nuestro sorteo. ¡Tú podrías ser el próximo!
          </p>
          <div className="mt-8">
            <Link href="/rituales" className="btn-primary">
              Compra un Ritual y Participa
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Caso 2: No hay sorteo futuro, pero sí hay un resultado pasado. Muestra el último ganador.
  if (latestPastDraw) {
    return (
      <section className="bg-background/80 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                Último Sorteo Realizado
              </h2>
              <p className="text-2xl font-serif text-foreground mb-6">
                {latestPastDraw.monto_premio}
              </p>
              <p className="text-muted mb-8 max-w-lg mx-auto md:mx-0">
                ¡Felicidades a los afortunados! Revisa los números y prepárate para el próximo gran premio.
              </p>
              <Link href="/circulo-de-la-suerte" className="btn-primary">
                Ver Historial de Sorteos
              </Link>
            </div>
            <div className="md:w-1/2 flex flex-col items-center justify-center">
              <div className="flex flex-wrap justify-center items-center gap-3">
                {latestPastDraw.numeros_ganadores?.map((num, i) => <NumberBall key={i} number={num} />)}
                {latestPastDraw.numero_suerte && <NumberBall number={latestPastDraw.numero_suerte} isLucky />}
              </div>
              <p className="text-muted mt-4 text-sm">{latestPastDraw.numero_sorteo}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Caso 3: No hay datos de ningún sorteo.
  return (
    <section className="bg-secondary py-20 md:py-28 text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
        Sorteo de la Fortuna Botánica
      </h2>
      <p className="text-lg text-muted max-w-2xl mx-auto">
        Próximamente anunciaremos nuestro primer gran sorteo. ¡Mantente atento!
      </p>
    </section>
  );
};

export default WinnerHighlight;