'use client';

import { useState } from 'react';
import Image from 'next/image';

// Тип для об'єкта новини
interface NewsItem {
  id: number;
  imageSrc: string;
  title: string;
  date: string;
  description: string;
}

const initialNewsItems: NewsItem[] = [
  {
    id: 1,
    imageSrc: '/tournament.png',
    title: 'Friendly Cup',
    date: '2025-09-15',
    description:
      '18 вересня відбудеться клубний турнір «Friendly Cup». Комбінована піраміда. Внесок 600 грн. Розминка з 10:00, початок об 11:00. Дізнатися деталі можна за телефоном: (044) 294-07-57 або у адміністратора.',
  },
  {
    id: 2,
    imageSrc: '/winners.png',
    title: 'Play House',
    date: '2025-09-11',
    description:
      '11 вересня 2022 Вітаємо наших переможців! Місце 1 Марченко Максим Місце 2 Петров Олександр Місце 3-4 Савчук Ігор Король Геннадій',
  },
];

export default function NewsSection() {
  const [newsItems] = useState<NewsItem[]>(initialNewsItems);

  return (
    <section
      id="news"
      className="bg-gradient-to-b from-[#221e1c] via-[#2f2922] to-[#3B332B] text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 mb-12 w-full container">
          <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
          <h2
            className="text-4xl font-bold text-[#c5c18d] text-center whitespace-nowrap"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Новини
          </h2>
          <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="bg-[#4a4235] rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={news.imageSrc}
                  alt={news.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#c5c18d]">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{news.date}</p>
                <p className="text-base text-gray-200">{news.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
