'use client';
import styles from './page.module.css';
import Header from '@/components/header/header';
import Nav from '@/components/nav/nav';
import Main from '@/app/main'
import Theme from '@/components/theme/theme';

import { ScrollProvider } from '@/context/ScrollContext';
import { ThemeProvider } from '@/context/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <Header />
        <Nav />
        <Main />
        <Theme />
      </ScrollProvider>
    </ThemeProvider>
  );
}
