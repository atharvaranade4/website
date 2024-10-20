'use client';
import styles from './page.module.css';
import Header from '@/components/header/header';
import Nav from '@/components/nav/nav';
import Main from '@/app/main'
import Theme from '@/components/theme/theme';

import { ScrollProvider } from '@/context/ScrollContext'; // Import ScrollProvider

export default function Home() {
  return (
    <ScrollProvider>
      <Header />
      <Nav />
      <Main />
      <Theme />
    </ScrollProvider>
  );
}
