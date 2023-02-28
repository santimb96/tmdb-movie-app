import React, { useEffect } from 'react'
import styles from './NotificationModal.module.css'
const NotificationModal = ({
  msg,
  color,
  Icon = null,
  title,
  show,
  setShowNotification,
}) => {
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShowNotification(false)
      }, 3000)
    }
  }, [show])
  return (
    <>
      {show && (
        <div
          className={styles.notificationCard}
          style={{ backgroundColor: color }}
        >
          <div className={styles.title}>
            {Icon && <Icon />}
            <h3>{title}</h3>
          </div>
          <p className={styles.message}>{msg}</p>
        </div>
      )}
    </>
  )
}

export default NotificationModal
