import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.scss';
import { useScroll } from '@/context/ScrollContext';

export default function Contact() {
	const sectionRefs = useScroll();
  return (
	<div ref={sectionRefs.contact} className={styles.contact}>
		<h1>Contact</h1>
	</div>
  )
}