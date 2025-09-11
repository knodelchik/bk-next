'use client';

import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Button } from './ui/button';

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
  return (
    <section
      id="about"
      className="relative w-full h-screen pt-20 bg-gradient-to-b from-black via-[#171411] to-[#1C1917]"
    >
      {/* Заголовок */}
      <div className="flex container items-center justify-center gap-10 mx-auto mb-12">
        <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
        <h2
          className="text-4xl font-bold text-[#c5c18d] text-center"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Про нас
        </h2>
        <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
      </div>

      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            stopOnFocusIn: true,
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="basis-[90%] md:basis-[70%] px-4 relative"
            >
              <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-lg border-2 border-[#5a532c]/40">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Текст поверх картинки */}
                <div className="absolute inset-0 flex flex-col justify-center items-start p-12 bg-black/40">
                  <p className="max-w-xl pb-4 text-white text-2xl md:text-4xl font-semibold drop-shadow-lg">
                    {slide.text}
                  </p>
                  <p className="max-w-xl text-gray-200 text-base md:text-xl drop-shadow-lg">
                    {slide.about}
                  </p>
                  <Button
                    className="mt-6 text-white border-0 bg-neutral-700 hover:bg-neutral-600"
                    variant="outline"
                    size="lg"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-31/200 top-2/5 text-white" />
        <CarouselNext className="right-1/6 top-2/5 text-white" />
      </Carousel>
    </section>
  );
}
