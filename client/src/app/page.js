'use client';
import styles from './page.module.css';
import Gallery from '@/components/gallery';
import Description from '@/components/description';
import PassionGallery from '@/components/passionGallery';
import HeroImage from '@/components/heroImage';
import Landing from '@/components/landing';

export default function Home() {
  return (
    <main id='my-scrollbar'>
      <div className={styles.mainContainer}>
        <HeroImage />
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <Description />
            <Gallery />
            <PassionGallery />
          </div>
        </div>
      </div>
    </main>
  );
}