'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import React from 'react';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNavbar = !pathname?.startsWith('/auth');

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
}
