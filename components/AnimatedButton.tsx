'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  label: string;
  icon: ReactNode;
  href?: string;
  className?: string;
  separatorColor?: string;
}

export function AnimatedButton({
  label,
  icon,
  href,
  className,
  separatorColor,
}: AnimatedButtonProps) {
  const content = (
    <Button
      variant="default"
      size="hero"
      className={cn(
        'group flex items-center relative justify-center max-w-fit cursor-pointer',
        className
      )}
    >
      <span className="text-lg md:text-xl">{label}</span>
      <span
        className={cn('h-full w-[1px] mx-3', separatorColor ?? 'bg-white/30')}
      />
      <span className="relative w-4 h-4 inline-block">
        <span className="absolute inset-0 size-4 opacity-100 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2">
          {icon}
        </span>
        <ArrowRight className="absolute inset-0 size-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
      </span>
    </Button>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
