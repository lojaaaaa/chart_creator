import React from 'react'
import styles from './ChartItem.module.scss'

const ChartItem = ({label, value}) => {
  return (
    <div className={styles.item}>
    <input 
      defaultValue={label} 
      placeholder={label} 
      className={styles.input} 
      type="text"
    />
    <input 
      defaultValue={value} 
      placeholder={value} 
      className={styles.input} 
      type="number" 
    />
  </div>
  )
}

export default ChartItem