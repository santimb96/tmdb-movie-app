import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import styles from './InputAuth.module.css'

const InputAuth = ({
  labelName = 'Username',
  fieldType = 'text',
  fieldName = 'username',
  fieldValue,
  setField,
  placeholder = 'some placeholder information',
}) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <label className={styles.formLabel} htmlFor={fieldName}>
        {labelName}
      </label>
      <div className={styles.inputContainer}>
        <input
          className={styles.formInput}
          placeholder={placeholder}
          value={fieldValue}
          type={isShow ? 'text' : fieldType}
          id={fieldName}
          name={fieldName}
          onChange={(e) => {
            setField(e.target.value)
          }}
        />
        {fieldName.toLowerCase().includes('password') &&
          (!isShow ? (
            <AiFillEyeInvisible onClick={() => setIsShow(!isShow)} />
          ) : (
            <AiFillEye onClick={() => setIsShow(!isShow)} />
          ))}
      </div>
    </>
  )
}

export default InputAuth
