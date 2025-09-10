'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { OrderButton } from './OrderButton';
import MobileHeader from './MobileHeader';

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

  // 🔥 Логика отслеживания секций
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
      <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Лого */}
        <a href="#main">
          <Image src="/logo.png" alt="Logo" width={100} height={50} priority />
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
          <span className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#5a532c] to-transparent" />
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
      <Transition appear show={modalOpen} as="div" className="relative z-60">
        <Dialog onClose={() => setModalOpen(false)} className="relative z-60">
          <Transition.Child
            as="div"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          />
          <Transition.Child
            as="div"
            className="fixed inset-0 flex items-center justify-center p-4"
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative w-full max-w-xs">
              <button
                type="button"
                className="absolute -top-15 -right-138 p-2 text-[#ca9d48] hover:text-[#3f2707] z-20"
                onClick={() => setModalOpen(false)}
              >
                <X className="w-8 h-8 transition" />
              </button>
              <Dialog.Panel className="bg-white rounded-md shadow-md transform transition-all">
                <img
                  src="/business-card.png"
                  alt="Визитівка"
                  className="w-full h-auto object-cover rounded-t-md"
                />
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
