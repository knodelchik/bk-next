import React from 'react';
import { PhoneCall } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

const MainSection: React.FC = () => {
  return (
    <section id="main" className="relative bg-black h-screen overflow-hidden">
      {/* Відео */}
      <div
        className="
       absolute inset-0 left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2  
       w-[120vh] h-[140vw] origin-center rotate-90
       md:inset-0 md:left-0 md:top-0 md:translate-x-0 md:translate-y-0 md:rotate-0 md:w-full md:h-full
       overflow-hidden z-10
        "
      >
        <video
          src="/bgVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover blur-[7px] brightness-60 contrast-120"
        >
          <source src="/bgVideo.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео-тег.
        </video>
      </div>

      {/* Текст поверх */}
      <div
        className="
    absolute z-30
    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    w-full px-4 md:px-8
  "
      >
        <div
          className="
      max-w-6xl mx-auto   /* контейнер */
      text-center
      lg:text-left lg:pl-40  /* лёгкое смещение вправо */
    "
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-white">
            Ваш заголовок
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl mb-6 text-white">
            Ваш підзаголовок або опис
          </p>
          <AnimatedButton
            href="#prices"
            className="mt-4 mx-auto lg:mx-0"
            label="Забронювати стіл"
            icon={<PhoneCall className="w-4 h-4" />}
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;