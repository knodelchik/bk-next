'use client';

import { useState } from 'react';
import Image from 'next/image';
import { OrderButton } from './OrderButton';
import { Badge } from '@/components/ui/badge';

type TableType = {
  id: string;
  title: string;
  description: string;
  image: string;
  badges: string[];
  prices: { time: string; price: string }[];
};

const tables: TableType[] = [
  {
    id: 'american',
    title: 'Американський пул',
    description:
      'Пул — найпопулярніший і динамічний вид більярду. Великі лузи та зрозумілі правила роблять його ідеальним для новачків.',
    image: '/american-pool.jpg',
    badges: ['Новачкам', 'Великі лузи', 'Динамічна гра'],
    prices: [
      { time: '09:00–13:00', price: '150 грн/год' },
      { time: '13:00–17:00', price: '200 грн/год' },
      { time: '17:00–23:00', price: '250 грн/год' },
    ],
  },
  {
    id: 'russian',
    title: 'Російський більярд (піраміда)',
    description:
      'Піраміда — класичний різновид з великими кулями та вузькими луза́ми. Складна й технічна гра для справжніх поціновувачів.',
    image: '/russian-billiard.jpg',
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
    description:
      'Снукер — стратегічна й інтелектуальна гра з малими кулями та великим столом. Професійна дисципліна, що вимагає точності.',
    image: '/snooker.png',
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

  return (
    <section
      id="prices"
      className="w-full text-white bg-gradient-to-b from-[#1C1917] via-[#2e2822] to-[#3B332B] py-16 px-6"
    >
      {/* Заголовок */}
      <div className="flex container items-center justify-center gap-10 mx-auto mb-12">
        <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
        <h2
          className="text-4xl font-bold text-[#c5c18d] text-center"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Ціни
        </h2>
        <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col w-full">
        <div className="max-w-7xl flex flex-col md:flex-row gap-12 w-full items-start">
          {/* Ліва частина: картинка */}
          <div className="relative w-full max-w-96 aspect-[13/20] mx-auto md:mx-0 rounded-xl overflow-hidden shadow-2xl border-2 border-[#5a532c]/40">
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Права частина */}
          <div className="flex-1 flex flex-col justify-between items-end text-right">
            <div className="w-full flex flex-col items-end">
              {/* Кнопки вибору */}
              <div className="flex gap-4 justify-end mb-6 flex-row-reverse flex-wrap">
                {tables.map((table) => (
                  <button
                    key={table.id}
                    onClick={() => setSelected(table)}
                    className={`px-6 py-3 rounded-lg text-lg transition font-medium ${
                      selected.id === table.id
                        ? 'bg-[#145428] text-white shadow-md'
                        : 'bg-neutral-700/70 hover:bg-neutral-600/80 text-gray-200'
                    }`}
                  >
                    {table.title}
                  </button>
                ))}
              </div>

              {/* Бейджі */}
              <div className="flex gap-2 flex-wrap justify-end mb-6">
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
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mb-6">
                {selected.description}
              </p>

              {/* Таблиця цін */}
              <div className="overflow-x-auto w-full max-w-xl rounded-lg shadow-md border border-[#5a532c]/30">
                <table className="w-full text-right text-base overflow-hidden">
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

            {/* Кнопка бронювання */}
            <OrderButton className="px-10 py-4 mr-0 md:mr-20 mt-10 text-lg bg-[#145428] rounded-lg hover:bg-emerald-800 transition shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
