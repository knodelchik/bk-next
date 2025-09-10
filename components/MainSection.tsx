import React from 'react';
import { PhoneCall } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

type Props = {};

const MainSection = (props: Props) => {
  return (
    <section
      id="main"
      className="relative bg-gray-900 flex items-center justify-start h-screen overflow-hidden"
    >
      {/* Текст на передньому плані */}
      <div className="absolute left-100 z-10 text-white">
        <h1 className="text-7xl font-bold mb-4">Ваш заголовок</h1>
        <p className="text-4xl">Ваш підзаголовок або опис</p>
        <AnimatedButton
          href="#prices"
          className="mt-4 "
          label="Забронювати стіл"
          icon={<PhoneCall className="size-4" />}
        />
      </div>

      {/* Відео справа, обмежена ширина */}
      <div className="ml-auto w-full h-full flex items-center justify-center mt-20">
        <video
          src="/bgVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover rounded-4xl shadow-lg w-full h-full blur-[7px] brightness-60 contrast-120 "
        >
          <source src="/bgVideo.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео-тег.
        </video>
      </div>
    </section>
  );
};

export default MainSection;
