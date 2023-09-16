import React from 'react'
import styles from './ChartInput.module.scss'

const ChartInput = () => {
  return (
    <div className={styles.items}>
      <h2 className={styles.title}>Cоздание</h2>
      <div className={styles.item}>
        <input placeholder='Значение' className={styles.input} type="text" />
        <input placeholder='1' className={styles.input} type="number" />
      </div>
      <div className={styles.item}>
        <input placeholder='Значение' className={styles.input} type="text" />
        <input placeholder='2' className={styles.input} type="number" />
      </div>
      <div className={styles.item}>
        <input placeholder='Значение' className={styles.input} type="text" />
        <input placeholder='2' className={styles.input} type="number" />
      </div>
      <div className={styles.item}>
        <input placeholder='Значение' className={styles.input} type="text" />
        <input placeholder='2' className={styles.input} type="number" />
      </div>
    </div>
  )
}

export default ChartInput