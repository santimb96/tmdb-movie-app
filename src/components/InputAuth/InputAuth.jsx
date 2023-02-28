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
  outlineColor = 'yellowgreen',
}) => {
  const [isShow, setIsShow] = useState(false)
  const isPassword = fieldName.toLowerCase().includes('password')
  return (
    <>
      <label className={styles.formLabel} htmlFor={fieldName}>
        {labelName}
      </label>
      <div
        className={styles.inputContainer}
        style={{ border: isPassword && `1px solid ${outlineColor}` }}
      >
        <input
          className={styles.formInput}
          placeholder={placeholder}
          maxLength={isPassword ? '12' : '10'}
          value={fieldValue}
          type={isShow ? 'text' : fieldType}
          id={fieldName}
          name={fieldName}
          onChange={(e) => {
            setField(e.target.value)
          }}
        />
        {isPassword &&
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
