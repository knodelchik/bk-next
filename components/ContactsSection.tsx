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
      className=" bg-gradient-to-b from-[#2b251f] via-[#312a24] to-[#3B332B] text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 mb-12 w-full container">
          <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
          <h2
            className="text-4xl font-bold text-[#c5c18d] text-center whitespace-nowrap"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Контакти
          </h2>
          <div className="flex-grow h-[2px] bg-[#5a532c] rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12 ">
          {/* Блок з контактною інформацією */}
          <div className="rounded-xl shadow-lg p-8 w-full md:w-1/2 md:mb-8 bg-[#3B332B] md:mt-12">
            <div className="mb-6 space-y-4">
              <p className="flex items-center text-lg font-medium text-gray-200">
                <MapPin className="mr-3 size-6 text-[#c5c18d]" />
                {contactInfo.address}
              </p>
              <p className="flex items-center text-lg font-medium text-gray-200">
                <PhoneCall className="mr-3 size-6 text-[#c5c18d]" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-[#c5c18d] transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p className="flex items-center text-lg font-medium text-gray-200">
                <Clock className="mr-3 size-6 text-[#c5c18d]" />
                Години роботи: {contactInfo.hours}
              </p>
            </div>

            {/* Соціальні мережі та кнопка маршруту */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-[#c5c18d]">
                Ми в соціальних мережах
              </h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href={contactInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-[#c5c18d] transition-colors"
                >
                  <Instagram className="size-8" />
                </a>
                <a
                  href={contactInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-[#c5c18d] transition-colors"
                >
                  <Facebook className="size-8" />
                </a>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=вулиця Юрія Коваленка, 6, Кропивницький, Кіровоградська область, 25031"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-[#c5c18d] text-[#c5c18d] rounded-full font-bold transition-all hover:bg-[#c5c18d] hover:text-[#2e2921]"
              >
                Побудувати маршрут
                <ArrowRight className="ml-2 size-5" />
              </a>
            </div>
          </div>

          {/* Блок з картою */}

          <div className="rounded-3xl border-3 border-[#5a532c] overflow-hidden shadow-xl w-full h-64 sm:h-80 md:h-96 lg:h-[450px] mt-8 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.66673021435!2d32.2094783!3d48.50128229999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d042a48fadb1ed%3A0x24db85739d92565c!2z0JHRltC70YzRj9GA0LTQvdC40Lkg0LrQu9GD0LEgItCh0LLQvtGP0Loi!5e0!3m2!1suk!2sua!4v1757256568393!5m2!1suk!2sua"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
