'use client';

import { useRef, ReactNode } from 'react';

export default function AnimatedSection({ 
       children,
       delay = 0
    }: { 
       children: ReactNode,
       delay?: number
    }) {
       const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={sectionRef} 
      className="animate-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}