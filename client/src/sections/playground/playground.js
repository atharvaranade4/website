import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.scss';
import { useScroll } from '@/context/ScrollContext';

export default function Playground() {
	const sectionRefs = useScroll();
  return (
	<div ref={sectionRefs.playground} className={styles.playground}>
		<h1>Playground</h1>
	</div>
  )
}