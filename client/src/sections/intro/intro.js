import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.scss';
import { useScroll } from '@/context/ScrollContext';

export default function Intro() {
	const sectionRefs = useScroll();
  return (
	<div ref={sectionRefs.intro} className={styles.intro}>
		<h1>Intro</h1>
	</div>
  )
}