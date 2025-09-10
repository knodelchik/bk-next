'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { OrderButton } from './OrderButton'; // Імпорт нового компонента

const sections = [
  'hero',
  'about',
  'prices',
  'news',
  'gallery',
  'contacts',
  'booking',
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setActiveSection(id);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#2e2921] shadow-md z-50">
      <div className="max-w-full flex items-center justify-between px-6 py-4">
        {/* Лого */}
        <a href="#main" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={120} height={60} priority />
        </a>

        {/* Навігація */}
        <nav className="flex space-x-12 text-white font-medium text-lg relative pb-2">
          {sections.slice(1, -1).map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`
              relative transition-colors duration-300 
              ${
                activeSection === id
                  ? 'text-[#c5c18d] after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-full after:bg-[#c5c18d] after:rounded-full after:origin-left after:scale-x-100 after:transition-transform after:duration-300 z-50'
                  : 'text-white hover:text-[#e0ddaa] after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-full after:bg-[#c5c18d] after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 z-50'
              }
            `}
            >
              {id === 'about' && 'Про нас'}
              {id === 'prices' && 'Ціни'}
              {id === 'news' && 'Новини'}
              {id === 'gallery' && 'Галерея'}
              {id === 'contacts' && 'Контакти'}
            </a>
          ))}
          <span className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#5a532c] to-transparent" />
        </nav>

        <OrderButton />
      </div>
    </header>
  );
}
