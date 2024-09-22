import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import { useScroll } from '@/context/ScrollContext';

const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

export default function Description() {
	const sectionRefs = useScroll();
  return (
	<div ref={sectionRefs.values}>
	<h1>Projects</h1>
    <div className={styles.description} >
			{
				phrases.map( (phrase, index) => {
					return <div key={index}>{phrase}</div>
				})
			}
    </div>
	</div>
  )
}