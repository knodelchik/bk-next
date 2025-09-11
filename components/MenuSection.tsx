'use client';

import Image from 'next/image';
import { ChefHat } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="container relative w-full text-white flex flex-col items-center justify-center 
                 bg-gradient-to-b from-[#3B332B] via-[#2c2620] to-[#221e1c] px-8 pb-16"
    >
      {/* Заголовок */}
      <div className="flex items-center justify-center gap-6 mb-12 w-full-7xl container">
        <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
        <h2
          className="text-4xl font-bold text-[#c5c18d] text-center whitespace-nowrap"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Меню
        </h2>
        <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
      </div>

      {/* Контент */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Ліва частина */}
       <div className="flex flex-col space-y-6">
  <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md text-center md:text-left mx-auto md:mx-0">
    У нашому більярдному клубі ви знайдете різноманітні страви та напої:
    від класичних закусок до фірмових страв кухні та коктейлів.
    Атмосфера бару створена для приємного відпочинку та гри.
  </p>

  <AnimatedButton
    label="Переглянути меню"
    icon={<ChefHat className="size-4" />}
    href="/menu_restorana.pdf"
    className="items-center bg-[#5a532c] hover:bg-[#746c3e] w-fit justify-end mx-auto md:mx-0"
  />
</div>


        {/* Права частина */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg border-2 border-[#5a532c]/40">
          <Image
            src="/menu.jpeg"
            alt="Більярдний бар"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
