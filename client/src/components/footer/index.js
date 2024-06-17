'use client'
import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef, useEffect, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    const [viewHeight, setViewHeight] = useState(0);
    const [localTime, setLocalTime] = useState('');

    useEffect(() => {
        const handleResize = () => {
            setViewHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        const updateTime = () => {
            setLocalTime(formatSeattleTime());
        };

        updateTime();
        const intervalId = setInterval(updateTime, 60000); // Update every minute

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(intervalId);
        };
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
		

    const x = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <h2>Let's Connect</h2>
                    </span>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Contact</p>
                        </Rounded>
                    </motion.div>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2024</p>
                        </span>
                        <span>
                            <h3>Local Time</h3>
                            <p>{localTime}</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <p>Instagram</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>LinkedIn</p>
                        </Magnetic>
                        <Magnetic>
                            <p>GitHub</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
