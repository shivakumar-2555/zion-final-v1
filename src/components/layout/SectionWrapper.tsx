import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
  ...props
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn('w-full py-12 md:py-16 lg:py-[72px]', className)} {...props}>
      <div className={cn('site-container', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
