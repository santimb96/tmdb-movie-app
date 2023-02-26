import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Film.module.css'
const Film = () => {
  const { id } = useParams()
  return <div>{console.log(id)}</div>
}

export default Film
