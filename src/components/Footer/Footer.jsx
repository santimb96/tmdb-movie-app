import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import styles from './Footer.module.css'

const ICONS = [
  { component: AiFillGithub, link: 'https://github.com/santimb96' },
  {
    component: AiFillLinkedin,
    link: 'https://www.linkedin.com/in/santi-martinez-bota/',
  },
  { component: AiFillMail, link: 'mailto:santiagomartinezbota@gmail.com' },
]

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.info}>
          <p>Created by Santiago Martínez</p>
          <p>© 2023 - All rights reserved</p>
        </div>
        <div className={styles.icons}>
          {ICONS?.map((Icon, idx) => (
            <a className={styles.link} href={Icon.link} target="_blank">
              <Icon.component key={idx} />
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}

export default Footer
