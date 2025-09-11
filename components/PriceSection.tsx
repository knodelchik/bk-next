'use client';

import { useState } from 'react';
import Image from 'next/image';
import { OrderButton } from './OrderButton';
import { Badge } from '@/components/ui/badge';
import OrderModal from './OrderModal';

type TableType = {
  id: string;
  title: string;
  titleMD: string;
  description: string;
  image: string;
  imageMobile: string;
  badges: string[];
  prices: { time: string; price: string }[];
};

const tables: TableType[] = [
  {
    id: 'american',
    title: 'Пул',
    titleMD: 'Американський пул',
    description:
      'Пул — найпопулярніший і динамічний вид більярду. Великі лузи та зрозумілі правила роблять його ідеальним для новачків.',
    image: '/american-pool.jpg',
    imageMobile: '/american-pool-mobile.jpg',
    badges: ['Новачкам', 'Великі лузи', 'Динамічна гра'],
    prices: [
      { time: '09:00–13:00', price: '150 грн/год' },
      { time: '13:00–17:00', price: '200 грн/год' },
      { time: '17:00–23:00', price: '250 грн/год' },
    ],
  },
  {
    id: 'russian',
    title: 'Піраміда',
    titleMD: 'Російська піраміда',
    description:
      'Піраміда — класичний різновид з великими кулями та вузькими луза́ми. Складна й технічна гра для справжніх поціновувачів.',
    image: '/russian-billiard.jpg',
    imageMobile: '/russian-billiard-mobile.jpg',
    badges: ['Вузькі лузи', 'Великі кулі', 'Висока складність'],
    prices: [
      { time: '09:00–13:00', price: '200 грн/год' },
      { time: '13:00–17:00', price: '250 грн/год' },
      { time: '17:00–23:00', price: '300 грн/год' },
    ],
  },
  {
    id: 'snooker',
    title: 'Снукер',
    titleMD: 'Снукер',
    description:
      'Снукер — стратегічна й інтелектуальна гра з малими кулями та великим столом. Професійна дисципліна, що вимагає точності.',
    image: '/snooker.png',
    imageMobile: '/snooker-mobile.png',
    badges: ['Великий стіл', 'Стратегія', 'Профі'],
    prices: [
      { time: '09:00–13:00', price: '180 грн/год' },
      { time: '13:00–17:00', price: '220 грн/год' },
      { time: '17:00–23:00', price: '270 грн/год' },
    ],
  },
];

export default function PricesSection() {
  const [selected, setSelected] = useState<TableType>(tables[0]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="prices"
      className="w-full text-white bg-gradient-to-b from-[#1C1917] via-[#2e2822] to-[#3B332B] py-16 px-4 sm:px-6 md:px-8 overflow-x-hidden"
    >
      {/* Заголовок (по центру, з лініями) */}
      <div className="flex container mx-auto items-center justify-center gap-6 mb-12 px-4">
        <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
        <h2
          className="text-3xl md:text-4xl font-bold text-[#c5c18d] text-center whitespace-nowrap"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Ціни
        </h2>
        <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 w-full items-start">
        {/* Зліва: картинка — Мобіль: горизонтальна + повернута; Десктоп: вертикальна */}

        <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-40">
          {/* MOBILE IMAGE */}
          <div
            className="
      relative w-full max-w-sm
      aspect-[20/13]
      rounded-xl overflow-hidden shadow-2xl border-2 border-[#5a532c]/40
      block md:hidden
    "
          >
            <Image
              src={selected.imageMobile}
              alt={selected.title}
              fill
              className="object-cover"
            />
          </div>

          {/* DESKTOP IMAGE */}
          <div
            className="
      relative w-full md:max-w-96
      aspect-[13/20]
      rounded-xl overflow-hidden shadow-2xl border-2 border-[#5a532c]/40
      hidden md:block
    "
          >
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Право: текст/кнопки/ціни */}
        <div className="flex-1 flex flex-col gap-6 items-center md:items-end text-center md:text-right w-full">
          {/* Кнопки вибору — MOBILE: horizontal scroll; DESKTOP: normal layout */}
          <div className="w-full" aria-label="Вибір столу / режиму">
            <div
              className="flex gap-4 md:justify-end md:flex-wrap
                         overflow-x-auto md:overflow-visible
                         snap-x snap-mandatory md:snap-none
                         py-2 px-1 md:px-0"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {tables.map((table) => {
                const active = selected.id === table.id;
                return (
                  <button
                    key={table.id}
                    onClick={() => setSelected(table)}
                    className={`snap-start md:snap-none min-w-[160px] md:min-w-0 ${
                      active
                        ? 'bg-[#145428] text-white shadow-md'
                        : 'bg-neutral-700/70 text-gray-200 hover:bg-neutral-600/80 cursor-pointer'
                    } px-4 py-3 rounded-lg text-sm md:text-base font-medium transition-colors`}
                    aria-pressed={active}
                  >
                    <div className="md:hidden">{table.title}</div>
                    <div className="hidden md:block">{table.titleMD}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Бейджі */}
          <div className="flex gap-2 flex-wrap justify-center md:justify-end mb-2">
            {selected.badges.map((badge, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-[#5a532c]/40 text-gray-200"
              >
                {badge}
              </Badge>
            ))}
          </div>

          {/* Опис */}
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
            {selected.description}
          </p>

          {/* Таблиця цін: на md+ — таблиця, на mobile — stacked rows */}
          <div className="w-full max-w-xl">
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              <div className="overflow-hidden rounded-lg shadow-md border border-[#5a532c]/30">
                <table className="w-full text-right text-base">
                  <thead className="bg-[#2B2620]/90 text-[#c5c18d]">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-sm">Час</th>
                      <th className="px-4 py-3 font-semibold text-sm">Ціна</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selected.prices.map((p, i) => (
                      <tr
                        key={i}
                        className="hover:bg-neutral-800/50 transition-colors"
                      >
                        <td className="px-4 py-3 text-gray-300">{p.time}</td>
                        <td className="px-4 py-3 font-semibold text-white">
                          {p.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MOBILE stacked price rows */}
            <div className="block md:hidden space-y-3">
              {selected.prices.map((p, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-[#2B2620]/80 rounded-lg px-4 py-3 border border-[#5a532c]/20 shadow-sm"
                >
                  <div className="text-sm text-gray-300">{p.time}</div>
                  <div className="text-sm font-semibold text-white">
                    {p.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопка забронювати — вирівняна вправо (self-end) */}
          <div className="w-full flex justify-center md:justify-end mt-2">
            <div className="self-end">
              <OrderButton
                onClickCallback={() => setModalOpen(true)}
                className="px-8 py-3 mt-2 text-base md:text-lg bg-[#145428] rounded-lg hover:bg-emerald-800 transition shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <OrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
