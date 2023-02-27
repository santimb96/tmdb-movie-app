import { useEffect, useRef } from 'react'
import {
  getCookieAgreement,
  setCookieAgreement,
} from '../../services/localStorage'
import { FaCookieBite } from 'react-icons/fa'
import styles from './CookieModal.module.css'

const CookieModal = () => {
  const dialog = useRef(null)

  useEffect(() => {
    if (!getCookieAgreement() && !dialog.current.open) {
      return dialog.current.showModal()
    }
  }, [])

  const handleCookieAgreement = () => {
    setCookieAgreement()
    return dialog.current.close()
  }
  return (
    <>
      <dialog ref={dialog} className={styles.modal}>
        <div className={styles.title}>
          <FaCookieBite />
          <h2>Cookies agreement</h2>
        </div>
        <p className={styles.description}>
          We use cookies for only necessary functionalities
        </p>
        <button
          className={styles.accept}
          onClick={() => handleCookieAgreement()}
        >
          Agree
        </button>
      </dialog>
    </>
  )
}

export default CookieModal
