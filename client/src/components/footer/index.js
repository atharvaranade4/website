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
            setLocalTime(formatLocalTime());
        };

        updateTime();
        const intervalId = setInterval(updateTime, 60000); // Update every minute

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(intervalId);
        };
    }, []);

    const formatLocalTime = () => {
        const now = new Date();

        let hours = now.getHours();
        const minutes = now.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format and handle midnight (0)
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        const timezoneOffset = -now.getTimezoneOffset();
        const offsetHours = Math.floor(timezoneOffset / 60);
        const offsetMinutes = timezoneOffset % 60;
        const formattedOffsetMinutes = offsetMinutes < 10 ? `0${offsetMinutes}` : offsetMinutes;
        const offsetSign = offsetHours >= 0 ? '+' : '-';
        const formattedOffset = `${offsetSign}${Math.abs(offsetHours)}`;

        return `${hours}:${formattedMinutes} ${period} GMT${formattedOffset}`;
    };

    const x = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                {/* <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/background.jpg`}
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                </div> */}
                {/* <div className={styles.nav}>
                    <Rounded>
                        <p>info@dennissnellenberg.com</p>
                    </Rounded>
                    <Rounded>
                        <p>+31 6 27 84 74 30</p>
                    </Rounded>
                </div> */}
                <div className={styles.info}>
                    <div className={styles.socials}>
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
                            <p>Github</p>
                        </Magnetic>
                    </div>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2024</p>
                        </span>
                        <span>
                            <h3>Time</h3>
                            <p>{localTime}</p>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
