"use client";

import { useEffect, useState } from 'react';
import BackToTop from '../common/BackToTop';
import NextNavbar from '../layout/NextNavbar';

export default function ClientProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  // Ensure components only render on client-side to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <NextNavbar />
      {children}
      <BackToTop />
    </>
  );
}
