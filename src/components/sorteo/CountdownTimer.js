'use client';
import { useState, useEffect } from 'react';

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
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

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