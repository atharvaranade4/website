'use client';
import styles from './page.module.css';
import Gallery from '@/components/gallery';
import Description from '@/components/description/description';
import PassionGallery from '@/components/passionGallery';
import HeroImage from '@/components/heroImage';
import AnchorMenu from '@/components/anchorMenu/anchorMenu'
import ProjectSection from '../components/projects/projects'; // Import the Values section
import { ScrollProvider } from '@/context/ScrollContext'; // Import ScrollProvider

export default function Home() {
  return (
    <ScrollProvider>
      <AnchorMenu />
      <ProjectSection />
      <Description />
    </ScrollProvider>
  );
}
