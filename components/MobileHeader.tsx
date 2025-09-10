'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
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
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />

          {/* меню */}
          <motion.div
            className="fixed top-0 right-0 h-full w-3/4 max-w-sm 
                       bg-gradient-to-b from-[#1e1a16] via-[#2e2921] to-[#3B332B]
                       text-white z-50 flex flex-col rounded-l-3xl shadow-2xl p-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* кнопка закрытия */}
            <button
              className="absolute top-6 right-6 text-gray-300 hover:text-[#c5c18d] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <ArrowRight size={28} />
            </button>

            {/* логотип */}
            <motion.div
              variants={linkVariants}
              className="flex justify-center mt-6"
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

            {/* навигация */}
            <nav className="flex flex-col justify-evenly flex-1 text-lg font-medium">
              {sections.slice(1, -1).map((id) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  variants={linkVariants}
                  className="block text-center px-4 py-3 rounded-xl bg-[#2e2921]/60 hover:bg-[#c5c18d] hover:text-[#2e2921] transition-all shadow-md"
                >
                  {id === 'about' && 'Про нас'}
                  {id === 'prices' && 'Ціни'}
                  {id === 'news' && 'Новини'}
                  {id === 'gallery' && 'Галерея'}
                  {id === 'contacts' && 'Контакти'}
                </motion.a>
              ))}

              {/* кнопка брони */}
              <motion.div
                variants={linkVariants}
                className="mt-4 flex justify-center"
              >
                <OrderButton
                  onClickCallback={() => {
                    setMenuOpen(false);
                    onReserve();
                  }}
                />
              </motion.div>
            </nav>

            {/* футер */}
            <motion.div
              variants={linkVariants}
              className="mt-6 border-t border-white/20 pt-4 text-sm text-gray-300 space-y-2"
            >
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-[#c5c18d]" />
                <a href="tel:+380991112233" className="hover:text-[#c5c18d]">
                  +38 (099) 111 22 33
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-[#c5c18d]" />
                <a
                  href="https://maps.google.com/?q=Киев,+Украина"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c5c18d]"
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
