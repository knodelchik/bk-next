"use client";

import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: '/about4.png',
    alt: 'Зал з більярдними столами',
    text: 'Піраміда',
    about:
      'Любителів класичної «російської піраміди» чекають просторі столи, високоякісні киї та комфортні умови для тривалих ігор. Тут можна як відточувати майстерність, так і проводити дружні матчі.',
    buttonText: 'Детальніше',
  },
  {
    src: '/about1.jpg',
    alt: 'Компанія друзів',
    text: 'Пул',
    about:
      'Наші столи для пулу створюють ідеальні умови як для новачків, так і для досвідчених гравців. Сучасне обладнання, професійне освітлення та затишна атмосфера допоможуть вам повністю зануритися у гру.',
    buttonText: 'Детальніше',
  },
  {
    src: '/about5.png',
    alt: 'Ресторан',
    text: 'Ресторан',
    about:
      'Наш ресторан пропонує страви європейської та української кухні, приготовані з любов’ю та тільки зі свіжих продуктів. Це місце, де можна смачно поїсти після гри чи провести вечір у приємній компанії.',
    buttonText: 'Детальніше',
  },
  {
    src: '/about6.png',
    alt: 'Бар',
    text: 'Бар',
    about:
      'Затишний бар з великим вибором коктейлів, елітного алкоголю та безалкогольних напоїв. Тут кожен знайде щось на свій смак — від класичних поєднань до авторських міксів від наших барменів.',
    buttonText: 'Детальніше',
  },
  {
    src: '/about7.png',
    alt: 'Турніри',
    text: 'Турніри',
    about:
      'Регулярні турніри для аматорів та професіоналів роблять клуб центром більярдного життя міста. Участь у змаганнях — це шанс перевірити свої сили, отримати новий досвід та завести нові знайомства.',
    buttonText: 'Детальніше',
  },
];


export default function AboutSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 10000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return (): void => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);


  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <section className="relative w-full pt-20 bg-gradient-to-b from-black via-[#171411] to-[#1C1917]">
      {/* Заголовок */}
      <div className="flex container items-center justify-center gap-10 mx-auto mb-12">
        <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
        <h2 className="text-4xl font-bold text-[#c5c18d] text-center" style={{ fontFamily: "Georgia, serif" }}>
          Про нас
        </h2>
        <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
      </div>

      {/* Embla Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] sm:flex-[0_0_90%] md:flex-[0_0_70%] px-2 sm:px-4"
            >
              <div className="relative w-full h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden shadow-lg border-2 border-[#5a532c]/40">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Текстовий блок */}
                <div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 md:top-2/3 md:left-8 md:translate-x-0 md:-translate-y-1/2 w-[90%] md:h-[39%] md:max-w-lg p-4 md:p-6 text-center md:text-left rounded-2xl overflow-hidden"
                >
                  {/* Фон з плавним переходом */}
                  <div className="absolute inset-0 rounded-2xl bg-black/50 backdrop-blur-md shadow-[inset_0_0_40px_rgba(0,0,0,0.9)]" />

                  <div className="relative">
                    <p className="text-white text-lg sm:text-xl md:text-4xl font-semibold">
                      {slide.text}
                    </p>
                    <p className="text-gray-200 text-sm sm:text-base md:text-xl mt-2">
                      {slide.about}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>

      {/* Стрілочки і dots під слайдером */}
      <div className="flex items-center justify-center mt-6 space-x-3">
        {/* Стрілка назад */}
        <button
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          className="p-2 border border-[#c5c18d]/50 rounded-full text-[#c5c18d] hover:bg-[#c5c18d] hover:text-black transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Точки */}
        <div className="flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedIndex === idx ? "bg-[#c5c18d]" : "bg-[#5a532c]/60"
                }`}
            />
          ))}
        </div>

        {/* Стрілка вперед */}
        <button
          onClick={() => emblaApi && emblaApi.scrollNext()}
          className="p-2 border border-[#c5c18d]/50 rounded-full text-[#c5c18d] hover:bg-[#c5c18d] hover:text-black transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

    </section>
  );
}
