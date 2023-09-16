import React from 'react'
import styles from './ChartInput.module.scss'
import ChartItem from '../ChartItem/ChartItem'

const ChartInput = ({data}) => {

  return (
    <div className={styles.items}>
      <h2 className={styles.title}>Cоздание</h2>
      {data.map((el, index) => 
        <ChartItem 
          key={index}
          label={el.label}
          value={el.data}
        />
      )}
    </div>
  )
}

export default ChartInput