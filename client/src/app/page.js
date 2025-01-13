'use client';
import styles from './page.module.css';
import Header from '@/components/header/header';
import Nav from '@/components/nav/nav';
import Main from '@/app/main'
import Theme from '@/components/theme/theme';
import Socials from '@/components/socials/socials';

import { ScrollProvider } from '@/context/ScrollContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { NavProvider } from '@/context/NavContext';

export default function Home() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <NavProvider>
          <Header />
          <Nav />
          <Main />
          <Socials />
          <Theme />
        </NavProvider>
      </ScrollProvider>
    </ThemeProvider>
  );
}
