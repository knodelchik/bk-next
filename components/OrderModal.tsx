'use client';

import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';

type OrderModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function OrderModal({ open, onClose }: OrderModalProps) {
  return (
    <Transition appear show={open} as="div" className="relative z-50">
      <Dialog onClose={onClose} className="relative z-50">
        {/* backdrop */}
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
        {/* modal */}
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
              className="absolute -top-12 -right-12 p-2 text-[#ca9d48] hover:text-[#3f2707] z-20"
              onClick={onClose}
            >
              <X className="w-8 h-8 transition" />
            </button>
            <Dialog.Panel className="bg-white rounded-md shadow-md transform transition-all">
              <img
                src="/business-card.png"
                alt="Візитівка"
                className="w-full h-auto object-cover rounded-t-md"
              />
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
