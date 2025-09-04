import React, { useEffect, useState } from "react";

// --- Componente Countdown ---
export function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (!Object.keys(newTimeLeft).length) {
        setIsLaunched(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (isLaunched) {
    return (
      <div className="text-center w-full py-4">
        <h3 className="text-3xl font-bold uppercase">Já disponível!</h3>
      </div>
    );
  }

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <div className="flex justify-center gap-2 md:gap-4 my-8 text-center">
      <div className="countdown-item rounded-lg p-3 md:p-4 w-20 md:w-24">
        <span className="text-3xl md:text-4xl font-bold">
          {formatTime(timeLeft.days)}
        </span>
        <span className="block text-xs uppercase">Dias</span>
      </div>
      <div className="countdown-item rounded-lg p-3 md:p-4 w-20 md:w-24">
        <span className="text-3xl md:text-4xl font-bold">
          {formatTime(timeLeft.hours)}
        </span>
        <span className="block text-xs uppercase">Horas</span>
      </div>
      <div className="countdown-item rounded-lg p-3 md:p-4 w-20 md:w-24">
        <span className="text-3xl md:text-4xl font-bold">
          {formatTime(timeLeft.minutes)}
        </span>
        <span className="block text-xs uppercase">Minutos</span>
      </div>
      <div className="countdown-item rounded-lg p-3 md:p-4 w-20 md:w-24">
        <span className="text-3xl md:text-4xl font-bold">
          {formatTime(timeLeft.seconds)}
        </span>
        <span className="block text-xs uppercase">Segundos</span>
      </div>
    </div>
  );
}
