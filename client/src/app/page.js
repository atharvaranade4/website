'use client';
import styles from './page.module.css';
import Gallery from '../components/gallery';
import Description from '../components/description'
import PassionProjects from '../components/passionProjects'
import Landing from '@/components/landing';
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
          <Description />
          <div className={styles.gallery}>
            <Gallery />
          </div>
          <div>
            <PassionProjects />
          </div>
        <h1>Menu</h1>
      </div>
    </main>
  );
}
