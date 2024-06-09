'use client';
import styles from './page.module.css';
import Gallery from '../components/gallery';
import Description from '../components/description'
import PassionGallery from '../components/passionGallery'
import Landing from '@/components/landing';
import ThreeDMesh from '@/components/threeDMesh';
import Menu from '@/components/menu'
import Header from '@/components/header'

export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles.mainContainer}>
        <ThreeDMesh />
        <div className={styles.contentContainer}>
          <div className={styles.content}>
              <Description />
              <Gallery />
              <PassionGallery />
          </div>
          <div className={styles.menu} >
            <Menu />
          </div>
        </div>
      </div>
    </main>
  );
}
