'use client';

import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';

export function OrderButton({ className, ...props }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={[
          className,
          'px-4 py-2 text-lg font-medium text-white rounded-md transition bg-[#5a532c] hover:bg-[#746c3e]',
        ].join(' ')}
        {...props}
      >
        Забронювати
      </button>

      <Transition
        appear
        show={isOpen}
        as={Dialog}
        onClose={() => setIsOpen(false)}
        className="relative z-10"
      >
        {/* Фон */}
        <Transition.Child
          as="div"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          onClick={() => setIsOpen(false)}
        />

        {/* Контейнер модального вікна та кнопки */}
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
              onClick={() => setIsOpen(false)}
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
      </Transition>
    </>
  );
}
