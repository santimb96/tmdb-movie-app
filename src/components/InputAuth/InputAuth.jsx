import React from 'react'
import styles from './InputAuth.module.css'

const InputAuth = ({
  labelName = 'Username',
  fieldType = 'text',
  fieldName = 'username',
  fieldValue,
  setField,
  placeholder = 'some placeholder information',
}) => {
  return (
    <>
      <label className={styles.formLabel} htmlFor={fieldName}>
        {labelName}
      </label>
      <input
        className={styles.formInput}
        placeholder={placeholder}
        value={fieldValue}
        type={fieldType}
        id={fieldName}
        name={fieldName}
        onChange={(e) => {
          setField(e.target.value)
        }}
      />
    </>
  )
}

export default InputAuth
