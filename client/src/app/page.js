'use client';
import styles from './page.module.css';
import React, { useEffect } from 'react';
import Header from '@/components/header/header';
import Nav from '@/components/nav/nav';
import Main from '@/app/main'
import Lenis from 'lenis';

import { ScrollProvider } from '@/context/ScrollContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { NavProvider } from '@/context/NavContext';

export default function Home() {

  useEffect(() => {
// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);  }, []);
  
  return (
    <ThemeProvider>
      <ScrollProvider>
        <NavProvider>
          <Header />
          <Nav />
          <Main />
        </NavProvider>
      </ScrollProvider>
    </ThemeProvider>
  );
}
