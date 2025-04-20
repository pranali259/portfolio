import React from 'react'
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to react out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={'/assets/contact/emailIcon.png'} alt="Email icon" />
                <a href='mailto:pranalisapkal27@gmail.com'>pranalisapkal27@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={'/assets/contact/linkedinIcon.png'} alt="LinkedIn icon"/>
                <a href='https://www.linkedin.com/in/pranali-sapkal/' target="_blank">linkedin.com/pranali-sapkal</a>
            </li>
            <li className={styles.link}>
                <img src={'/assets/contact/githubIcon.png'} alt="Github icon" />
                <a href='https://github.com/pranali259' target="_blank">github.com/pranali259</a>
            </li>
        </ul>
    </footer>
  )
}