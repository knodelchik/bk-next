'use client';

import Image from 'next/image';
import { Facebook, Instagram, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '+380 (67) 123 45 67';

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber.replace(/\s|\(|\)/g, ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone number:', err);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#3B332B] via-[#26211b] to-[#110f0c] text-[#c5c18d]">
      <div className="container mx-auto px-4">
        {/* LOGO + бокові підкреслення */}
        <div className="flex items-center justify-center gap-4 py-8">
          <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full max-w-16 sm:max-w-none" />
          <a href="#hero" aria-label="На головну" className="mx-2 inline-block">
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={40}
              className="h-8 w-auto sm:h-10"
              priority
            />
          </a>
          <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full max-w-16 sm:max-w-none" />
        </div>

        {/* Основний контент */}
        <div className="pb-8">
          {/* Мобільна версія - все в одну колонку */}
          <div className="block md:hidden space-y-8">
            {/* Контакти */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Контакти
              </h3>
              <div className="space-y-3">
                <a
                  href="https://maps.google.com/?q=48.50128229999999,32.2094783"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-[#c5c18d] transition-colors duration-300 cursor-pointer group"
                  title="Відкрити в Google Maps"
                >
                  <MapPin
                    size={16}
                    className="flex-shrink-0 group-hover:text-[#c5c18d]"
                  />
                  <span>м. Кропивницький, вул. Велика Перспективна, 21</span>
                </a>
                <div className="w-full flex justify-center">
                  <button
                    onClick={copyPhoneNumber}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#c5c18d] transition-colors duration-300 cursor-pointer group"
                    title={
                      copied ? 'Скопійовано!' : 'Натисніть, щоб скопіювати'
                    }
                  >
                    <Phone
                      size={16}
                      className={`flex-shrink-0 transition-colors ${
                        copied ? 'text-[#a8b17a]' : 'group-hover:text-[#c5c18d]'
                      }`}
                    />
                    <span className={copied ? 'text-[#a8b17a]' : ''}>
                      {phoneNumber}
                    </span>
                    {copied && (
                      <span className="text-xs text-[#a8b17a] ml-1">✓</span>
                    )}
                  </button>
                </div>
                <p className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <Clock size={16} className="flex-shrink-0" />
                  <span>09:00 — 22:00 щодня</span>
                </p>
              </div>
            </div>

            {/* Навігація - компактна сітка */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Навігація
              </h3>
              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                <a
                  href="#about"
                  className="hover:text-gray-200 text-gray-300 hover:underline text-sm py-1"
                >
                  Про нас
                </a>
                <a
                  href="#prices"
                  className="hover:text-gray-200 text-gray-300 hover:underline text-sm py-1"
                >
                  Ціни
                </a>
                <a
                  href="#menu"
                  className="hover:text-gray-200 text-gray-300 hover:underline text-sm py-1"
                >
                  Меню
                </a>
                <a
                  href="#news"
                  className="hover:text-gray-200 text-gray-300 hover:underline text-sm py-1"
                >
                  Новини
                </a>
                <a
                  href="#gallery"
                  className="hover:text-gray-200 text-gray-300 hover:underline text-sm py-1"
                >
                  Галерея
                </a>
                <a
                  href="#contacts"
                  className="hover:text-gray-200 text-gray-300 hover:underline text-sm py-1"
                >
                  Контакти
                </a>
              </div>
            </div>

            {/* Соцмережі */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Ми у соцмережах
              </h3>
              <div className="flex justify-center gap-4 mb-4">
                <a
                  href="#"
                  className="p-3 bg-[#5a532c]/20 rounded-full hover:bg-[#c5c18d] hover:text-[#1C1917] transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#5a532c]/20 rounded-full hover:bg-[#c5c18d] hover:text-[#1C1917] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
              <p className="text-xs text-gray-400">
                Для групових бронювань телефонуйте
              </p>
            </div>
          </div>

          {/* Десктопна версія - три колонки */}
          <div className="hidden md:grid md:grid-cols-3 gap-10 text-center md:text-left">
            {/* Контакти */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Контакти
              </h3>
              <a
                href="https://maps.google.com/?q=48.50128229999999,32.2094783"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 mb-2 text-gray-300 hover:text-[#c5c18d] transition-colors duration-300 cursor-pointer group"
                title="Відкрити в Google Maps"
              >
                <MapPin size={18} className="group-hover:text-[#c5c18d]" />
                <span>м. Кропивницький, вул. Велика Перспективна, 21</span>
              </a>
              <div className="w-full flex justify-center md:justify-start">
                <button
                  onClick={copyPhoneNumber}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#c5c18d] transition-colors duration-300 cursor-pointer group"
                  title={copied ? 'Скопійовано!' : 'Натисніть, щоб скопіювати'}
                >
                  <Phone
                    size={18}
                    className={`transition-colors ${
                      copied ? 'text-[#a8b17a]' : 'group-hover:text-[#c5c18d]'
                    }`}
                  />
                  <span className={copied ? 'text-[#a8b17a]' : ''}>
                    {phoneNumber}
                  </span>
                  {copied && (
                    <span className="text-xs text-[#a8b17a] ml-1">✓</span>
                  )}
                </button>
              </div>
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

              <p className="mt-6 text-sm text-gray-400 max-w-xs md:max-w-full">
                Працюємо щодня: 09:00 — 22:00.
                <br />
                Для групових бронювань телефонуйте.
              </p>
            </div>
          </div>
        </div>

        {/* Нижня лінія */}
        <div className="border-t border-[#5a532c]/40 pt-4 pb-6 text-center text-xs sm:text-sm text-[#9c9975]">
          © {new Date().getFullYear()} Більярдний клуб {'"Свояк"'}. Всі права
          захищено.
        </div>
      </div>
    </footer>
  );
}
