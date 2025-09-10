'use client';

import Image from 'next/image';
import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3B332B] via-[#26211b] to-[#110f0c] text-[#c5c18d] py-10">
      <div className="container mx-auto px-4">
        {/* LOGO + бокові підкреслення */}
        <div className="flex items-center justify-center gap-4 mb-6 w-full container">
          <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
          <a href="#hero" aria-label="На головну" className="mx-4 inline-block">
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={40}
              priority
            />
          </a>
          <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Контакти */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Контакти</h3>
            <p className="flex items-center justify-center md:justify-start gap-2 mb-2 text-gray-300">
              <MapPin size={18} /> м. Кропивницький, вул. Велика Перспективна,
              21
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
              <Phone size={18} /> +380 (67) 123 45 67
            </p>
          </div>

          {/* Навігація */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white ml-5">
              Навігація
            </h3>
            <ul className="grid grid-cols-2 auto-cols-max gap-y-2 gap-x-6 w-max mx-auto md:mx-0">
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-200 text-gray-300 hover:underline"
                >
                  Про нас
                </a>
              </li>
              <li>
                <a
                  href="#prices"
                  className="hover:text-gray-200 text-gray-300 hover:underline"
                >
                  Ціни
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-gray-200 text-gray-300 hover:underline"
                >
                  Меню
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="hover:text-gray-200 text-gray-300 hover:underline"
                >
                  Новини
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-gray-200 text-gray-300 hover:underline"
                >
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="hover:text-gray-200 text-gray-300 hover:underline"
                >
                  Контакти
                </a>
              </li>
            </ul>
          </div>

          {/* Соцмережі */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Ми у соцмережах
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="p-2 bg-[#5a532c]/20 rounded-full hover:bg-[#c5c18d] hover:text-[#1C1917] transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-[#5a532c]/20 rounded-full hover:bg-[#c5c18d] hover:text-[#1C1917] transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* невелика підсвітка/опис */}
            <p className="mt-6 text-sm text-gray-400 max-w-xs md:max-w-full">
              Працюємо щодня: 09:00 — 22:00.<br></br>
              Для групових бронювань телефонуйте.
            </p>
          </div>
        </div>

        {/* Нижня лінія */}
        <div className="mt-10 border-t border-[#5a532c]/40 pt-4 text-center text-sm text-[#9c9975]">
          © {new Date().getFullYear()} Більярдний клуб "Свояк". Всі права
          захищено.
        </div>
      </div>
    </footer>
  );
}
