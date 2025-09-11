'use client';

import type { ButtonHTMLAttributes } from 'react';

type OrderButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  onClickCallback?: () => void;
};

export function OrderButton({
  className,
  onClickCallback,
  ...props
}: OrderButtonProps) {
  return (
    <button
      onClick={(e) => {
        onClickCallback?.(); // 👉 вызываем внешний обработчик (например: закрыть меню + открыть модалку)
        props.onClick?.(e); // 👉 если был передан onClick, вызовем и его
      }}
      className={[
        className,
        'px-4 py-2 text-lg font-medium text-white rounded-md transition bg-[#5a532c] hover:bg-[#746c3e] cursor-pointer',
      ].join(' ')}
      {...props}
    >
      Забронювати
    </button>
  );
}
