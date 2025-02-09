import React, { useEffect, useRef, useState} from 'react'
import { useInView, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image'; // Import Next.js Image component
import { useScroll } from '@/context/ScrollContext';
import { slideUp, opacity } from '../../common/animation';
import Socials from '@/components/socials/socials';
import Magnetic from '../../common/Magnetic'

export default function Contact() {
	const sectionRefs = useScroll();
	const [localTime, setLocalTime] = useState('');

	const phrase = "Let's create something fun together"
	const description = useRef(null);
	const isInView = useInView(description)

	useEffect(() => {
			const updateTime = () => {
					setLocalTime(formatSeattleTime());
			};
			updateTime();
			const intervalId = setInterval(updateTime, 60000); // Update every minute
	}, []);

	const formatSeattleTime = () => {
		// Get current time in Seattle using the "America/Los_Angeles" time zone
		const now = new Date();
		const options = {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
			timeZone: 'America/Los_Angeles',
		};
		const formatter = new Intl.DateTimeFormat('en-US', options);
		const formattedTime = formatter.format(now);
	
		// Get the timezone offset for Seattle
		const seattleDate = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
		const seattleTime = new Date(seattleDate);
		const timezoneOffset = -seattleTime.getTimezoneOffset();
		const offsetHours = Math.floor(timezoneOffset / 60);
		const offsetMinutes = timezoneOffset % 60;
		const formattedOffsetMinutes = offsetMinutes < 10 ? `0${offsetMinutes}` : offsetMinutes;
		const offsetSign = offsetHours >= 0 ? '+' : '-';
		const formattedOffset = `${offsetSign}${Math.abs(offsetHours)}${formattedOffsetMinutes}`;
	
		return `${formattedTime} GMT${formattedOffset}`;
	};
  return (
	<section ref={sectionRefs.contact} className={styles.contact} style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
		<div className={styles.footerContainer}>		
			<div className={styles.contactContainer}>
				<div ref={description} className={styles.contactTextContainer}>
					<div className={styles.body}>
						<h2>
						{
								phrase.split(" ").map( (word, index) => {
										return <span key={index} className={styles.mask}>
												<motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
								})
						}
						</h2>
					</div>
					<div className={styles.social}>
					<div>
						<span>
								<h3>socials</h3>
								<Magnetic>
										<a
											href="https://www.linkedin.com"
											target="_blank"
											rel="noopener noreferrer"
											className={styles.socialLinks}
										>
											LinkedIn
										</a>
								</Magnetic>
						</span>
								<Magnetic>
										<a
											href="https://www.github.com"
											target="_blank"
											rel="noopener noreferrer"
											className={styles.socialLinks}
										>
											Github
										</a>
								</Magnetic>
				</div>
					</div>
				</div>
				<div className={styles.brand}>
					<Image
						src="/images/portrait.jpg"
						alt="Logo"
						width={700}
						height={700}
						className={styles.Logo}
					/>
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.footerContent}>
					<span>
						<p>Version</p>
						<p>2024</p>
					</span>
					<span>
						<p>Local Time</p>
						<p>{localTime}</p>
					</span>
				</div>
			</div>
		</div>
	</section>
  )
}