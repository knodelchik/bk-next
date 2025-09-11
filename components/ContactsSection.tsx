'use client';

import {
  MapPin,
  PhoneCall,
  Clock,
  Instagram,
  Facebook,
  ArrowRight,
} from 'lucide-react';
import React from 'react';

const contactInfo = {
  address: 'м. Кропивницький, Юрія Коваленка 6',
  phone: '099 280 9907',
  hours: 'з 09:00 по 22:00',
  social: {
    instagram: '#', // Замініть на посилання
    facebook: '#', // Замініть на посилання
  },
};

export default function ContactsSection() {
  return (
    <section
      id="contacts"
      className="py-16 bg-gradient-to-b from-[#2b251f] via-[#312a24] to-[#3B332B] text-white"
    >
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="flex items-center justify-center gap-6 mb-16 w-full">
          <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
          <h2
            className="text-3xl md:text-4xl font-bold text-[#c5c18d] text-center whitespace-nowrap"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Контакти
          </h2>
          <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
        </div>

        {/* Основной контент */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Левый блок - Контактная информация */}
            <div className="space-y-8">
              {/* Основная контактная информация */}
              <div className="bg-gradient-to-br from-[#3B332B] to-[#2e2720] rounded-2xl p-8 shadow-2xl border border-[#5a532c]/30">
                <h3 className="text-2xl font-bold text-[#c5c18d] mb-8 text-center lg:text-left">
                  Як нас знайти
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 rounded-xl bg-[#c5c18d]/20 group-hover:bg-[#c5c18d]/30 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-[#c5c18d]" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-200 leading-relaxed">
                        {contactInfo.address}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Свій паркінг, зручне розташування
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 rounded-xl bg-[#c5c18d]/20 group-hover:bg-[#c5c18d]/30 transition-all duration-300">
                      <PhoneCall className="w-6 h-6 text-[#c5c18d]" />
                    </div>
                    <div>
                      <a
                        href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                        className="text-lg font-medium text-gray-200 hover:text-[#c5c18d] transition-colors duration-300"
                      >
                        {contactInfo.phone}
                      </a>
                      <p className="text-sm text-gray-400 mt-1">
                        Передзвоніть для бронювання
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 rounded-xl bg-[#c5c18d]/20 group-hover:bg-[#c5c18d]/30 transition-all duration-300">
                      <Clock className="w-6 h-6 text-[#c5c18d]" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-200">
                        <span className="lg:hidden">
                          Графік роботи:
                          <br />з 9:00 по 22:00
                        </span>
                        <span className="hidden lg:inline">
                          Графік роботи: з 9:00 по 22:00
                        </span>
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Щоденно, без вихідних
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Социальные сети и маршрут */}
              <div className="bg-gradient-to-br from-[#3B332B] to-[#2e2720] rounded-2xl p-8 shadow-2xl border border-[#5a532c]/30">
                <h3 className="text-xl font-bold text-[#c5c18d] mb-6 text-center lg:text-left">
                  Ми в соціальних мережах
                </h3>

                <div className="flex justify-center lg:justify-start space-x-6 mb-8">
                  <a
                    href={contactInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-[#c5c18d]/20 hover:bg-[#c5c18d]/30 text-gray-200 hover:text-[#c5c18d] transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-7 h-7" />
                  </a>
                  <a
                    href={contactInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-[#c5c18d]/20 hover:bg-[#c5c18d]/30 text-gray-200 hover:text-[#c5c18d] transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-7 h-7" />
                  </a>
                </div>

                <div className="text-center lg:text-left">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=вулиця Юрія Коваленка, 6, Кропивницький, Кіровоградська область, 25031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#c5c18d] to-[#b8b373] text-[#2e2921] rounded-2xl font-bold transition-all duration-300 hover:from-[#d4d09a] hover:to-[#c7c380] hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Побудувати маршрут
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Правый блок - Карта */}
            <div className="w-full h-full min-h-[500px] lg:min-h-[600px]">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#5a532c]/50 bg-gradient-to-br from-[#c5c18d]/10 to-transparent p-1">
                <div className="w-full h-full rounded-3xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.66673021435!2d32.2094783!3d48.50128229999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d042a48fadb1ed%3A0x24db85739d92565c!2z0JHRltC70YzRj9GA0LTQvdC40Lkg0LrQu9GD0LEgItCh0LLQvtGP0Loi!5e0!3m2!1suk!2sua!4v1757256568393!5m2!1suk!2sua"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
