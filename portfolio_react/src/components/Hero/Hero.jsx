import React from 'react';
import heroImage from '/assets/hero/heroImage.png';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi I am Pranali </h1>
            <p className={styles.description}>I am a full stack developer with 10 years of Experience.</p>
            <a href="mailto:pranalisapkal27@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={heroImage} alt='Hero image' className={styles.heroImg}></img>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
