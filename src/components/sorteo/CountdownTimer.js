// src/components/sorteo/CountdownTimer.js
'use client';
import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  // FIX: Se añade un estado para saber si estamos en el cliente.
  const [isClient, setIsClient] = useState(false);

  // EXPLANATION: useEffect se ejecuta solo en el lado del cliente.
  // Al montar el componente, establecemos isClient a true.
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const calculateTimeLeft = () => {
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
    if (!isClient) return; // No ejecutar el timer en el servidor

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // FIX: No renderizamos el contenido dinámico hasta que estemos en el cliente.
  // Esto asegura que no haya desfase entre servidor y cliente.
  if (!isClient) {
    // Puedes retornar un esqueleto o null para el renderizado inicial en servidor.
    return (
        <div className="flex justify-center gap-4 md:gap-6">
            <div className="text-center bg-background/50 p-4 rounded-lg border border-primary/20 w-24 opacity-50">
                <span className="text-4xl md:text-5xl font-bold text-primary">--</span>
                <span className="block text-xs uppercase text-muted mt-1">días</span>
            </div>
            <div className="text-center bg-background/50 p-4 rounded-lg border border-primary/20 w-24 opacity-50">
                <span className="text-4xl md:text-5xl font-bold text-primary">--</span>
                <span className="block text-xs uppercase text-muted mt-1">horas</span>
            </div>
            <div className="text-center bg-background/50 p-4 rounded-lg border border-primary/20 w-24 opacity-50">
                <span className="text-4xl md:text-5xl font-bold text-primary">--</span>
                <span className="block text-xs uppercase text-muted mt-1">minutos</span>
            </div>
            <div className="text-center bg-background/50 p-4 rounded-lg border border-primary/20 w-24 opacity-50">
                <span className="text-4xl md:text-5xl font-bold text-primary">--</span>
                <span className="block text-xs uppercase text-muted mt-1">segundos</span>
            </div>
        </div>
    );
  }

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
    if (isNaN(value)) {
      return null;
    }
    return (
      <div key={interval} className="text-center bg-background/50 p-4 rounded-lg border border-primary/20 w-24">
        <span className="text-4xl md:text-5xl font-bold text-primary">{String(value).padStart(2, '0')}</span>
        <span className="block text-xs uppercase text-muted mt-1">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center gap-4 md:gap-6">
      {timerComponents.length ? timerComponents : <span>¡El sorteo ha comenzado!</span>}
    </div>
  );
};

export default CountdownTimer;