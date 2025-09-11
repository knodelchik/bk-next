'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { OrderButton } from './OrderButton';
import MobileHeader from './MobileHeader';
import OrderModal from './OrderModal';

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Логика отслеживания секций
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
    <header
      className="
      w-full bg-[#2e2921] shadow-md z-50 
      relative   /* базовое поведение для мобил */
      md:sticky md:top-0 /* липкий только на десктопе */
    "
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-6 md:py-4">
        {/* Лого */}
        <a href="#main">
          <Image src="/logo.png" alt="Logo" width={125} height={62} priority />
        </a>

        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-10 text-white font-medium text-lg relative pb-2">
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
          {/* Золотистая полоска снизу */}
          <span className="absolute bottom-0 -left-5 w-full h-[4px] bg-gradient-to-r from-transparent via-[#5a532c] to-transparent" />
        </nav>

        {/* Кнопка для десктопа */}
        <div className="hidden md:block">
          <OrderButton onClickCallback={() => setModalOpen(true)} />
        </div>

        {/* Бургер для мобил */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(true)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* Мобильное меню */}
      <MobileHeader
        open={menuOpen}
        setMenuOpen={setMenuOpen}
        sections={sections}
        onReserve={() => setModalOpen(true)}
      />

      {/* Модалка */}
      <OrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}
