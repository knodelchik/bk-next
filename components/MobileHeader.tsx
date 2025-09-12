'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, Phone, MapPin, ChevronRight } from 'lucide-react';
import Image from 'next/image';

type Props = {
  open: boolean;
  setMenuOpen: (open: boolean) => void;
  sections: string[];
  onReserve: () => void;
};

const menuVariants: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function MobileHeader({
  open,
  setMenuOpen,
  sections,
  onReserve,
}: Props) {
  // Устанавливаем корректную высоту viewport для Safari
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    if (open) {
      setVH();
      window.addEventListener('resize', setVH);
      window.addEventListener('orientationchange', setVH);

      // Блокируем скролл
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* затемнение */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
          />

          {/* меню */}
          <motion.div
            className="fixed top-0 right-0 w-3/4 max-w-sm 
                       bg-gradient-to-b from-[#1a1612] via-[#2a241d] to-[#332b22]
                       text-white z-50 flex flex-col rounded-l-3xl shadow-2xl border-l border-[#c5c18d]/20"
            style={{
              height: 'calc(var(--vh, 1vh) * 100)',
            }}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* кнопка закрытия */}
            <motion.button
              className="absolute top-6 right-6 text-gray-300 hover:text-[#c5c18d] 
                         transition-all duration-200 hover:scale-110 hover:rotate-90"
              onClick={() => setMenuOpen(false)}
              variants={linkVariants}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight size={28} />
            </motion.button>

            {/* логотип */}
            <motion.div
              variants={linkVariants}
              className="flex justify-center mt-8 mb-4"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={60}
                priority
                className="drop-shadow-lg"
              />
            </motion.div>

            {/* навігація */}
            <nav className="flex flex-col space-y-4 px-4 flex-1 overflow-y-auto">
              {sections.slice(1, -1).map((id, index) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  variants={linkVariants}
                  whileHover={{ scale: 1.02, x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-between px-5 py-4 rounded-2xl 
                           bg-gradient-to-r from-[#2a241d]/60 to-[#332b22]/60 
                           hover:from-[#c5c18d]/90 hover:to-[#b8b373]/90 
                           hover:text-[#1a1612] transition-all duration-200 
                           shadow-lg hover:shadow-xl border border-white/10 
                           hover:border-[#c5c18d]/50 backdrop-blur-sm"
                >
                  <span className="text-lg font-semibold tracking-wide">
                    {id === 'about' && 'Про нас'}
                    {id === 'prices' && 'Ціни'}
                    {id === 'news' && 'Новини'}
                    {id === 'gallery' && 'Галерея'}
                    {id === 'contacts' && 'Контакти'}
                  </span>
                  <ChevronRight
                    className="w-5 h-5 opacity-60 group-hover:opacity-100 
                              group-hover:translate-x-1 transition-all duration-200"
                  />
                </motion.a>
              ))}

              {/* кнопка брони */}
              <motion.div variants={linkVariants} className="mt-6 px-4">
                <motion.button
                  onClick={() => {
                    setMenuOpen(false);
                    onReserve();
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 px-6 rounded-2xl text-lg font-bold
                           bg-gradient-to-r from-[#c5c18d] to-[#b8b373]
                           text-[#1a1612] hover:from-[#d4d09a] hover:to-[#c7c380]
                           shadow-lg hover:shadow-xl transition-all duration-200
                           border-2 border-transparent hover:border-white/20"
                >
                  Забронювати стіл
                </motion.button>
              </motion.div>
            </nav>

            {/* футер с фиксированным позиционированием */}
            <motion.div
              variants={linkVariants}
              className="border-t border-white/20 pt-6 px-4 space-y-4"
              style={{
                paddingBottom: 'max(24px, env(safe-area-inset-bottom))',
              }}
            >
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-[#c5c18d]/20 group-hover:bg-[#c5c18d]/30 transition-colors duration-200">
                  <Phone size={18} className="text-[#c5c18d]" />
                </div>
                <a
                  href="tel:+380991112233"
                  className="text-gray-300 hover:text-[#c5c18d] transition-colors duration-200 font-medium"
                >
                  +38 (099) 280 99 07
                </a>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-[#c5c18d]/20 group-hover:bg-[#c5c18d]/30 transition-colors duration-200">
                  <MapPin size={18} className="text-[#c5c18d]" />
                </div>
                <a
                  href="https://maps.google.com/?q=Кропивницький,+Україна"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#c5c18d] transition-colors duration-200 font-medium"
                >
                  Кропивницький, Україна
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
