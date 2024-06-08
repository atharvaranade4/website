'use client';
import styles from './page.module.css';
import Gallery from '../components/gallery';
import Description from '../components/description'
import PassionGallery from '../components/passionGallery'
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
            <PassionGallery />
          </div>
      </div>
      <div>
        <p>Menu</p>
      </div>
    </main>
  );
}
