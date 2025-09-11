'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, Phone, MapPin, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { OrderButton } from './OrderButton';

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
      type: 'spring',
      stiffness: 100,
      damping: 18,
      when: 'beforeChildren',
      staggerChildren: 0.07,
    },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.25 },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export default function MobileHeader({
  open,
  setMenuOpen,
  sections,
  onReserve,
}: Props) {
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
            onClick={() => setMenuOpen(false)}
          />

          {/* меню */}
          <motion.div
            className="fixed top-0 right-0 h-full w-3/4 max-w-sm 
                       bg-gradient-to-b from-[#1a1612] via-[#2a241d] to-[#332b22]
                       text-white z-50 flex flex-col rounded-l-3xl shadow-2xl border-l border-[#c5c18d]/20"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* кнопка закрытия */}
            <button
              className="absolute top-6 right-6 text-gray-300 hover:text-[#c5c18d] 
                         transition-all duration-300 hover:scale-110 hover:rotate-90"
              onClick={() => setMenuOpen(false)}
            >
              <ArrowRight size={28} />
            </button>

            {/* логотип */}
            <motion.div
              variants={linkVariants}
              className="flex justify-center mt-10 mb-10"
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
            <nav className="flex flex-col space-y-5 px-4 flex-1">
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
                           hover:text-[#1a1612] transition-all duration-300 
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
                              group-hover:translate-x-1 transition-all duration-300"
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
                           shadow-lg hover:shadow-xl transition-all duration-300
                           border-2 border-transparent hover:border-white/20"
                >
                  Забронювати стіл
                </motion.button>
              </motion.div>
            </nav>

            {/* футер */}
            <motion.div
              variants={linkVariants}
              className="mt-auto border-t border-white/20 pt-6 px-4 pb-6 space-y-4"
            >
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-[#c5c18d]/20 group-hover:bg-[#c5c18d]/30 transition-colors">
                  <Phone size={18} className="text-[#c5c18d]" />
                </div>
                <a
                  href="tel:+380991112233"
                  className="text-gray-300 hover:text-[#c5c18d] transition-colors font-medium"
                >
                  +38 (099) 111 22 33
                </a>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-[#c5c18d]/20 group-hover:bg-[#c5c18d]/30 transition-colors">
                  <MapPin size={18} className="text-[#c5c18d]" />
                </div>
                <a
                  href="https://maps.google.com/?q=Кропивницький,+Україна"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#c5c18d] transition-colors font-medium"
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
