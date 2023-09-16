import React from 'react'
import styles from './ChartInput.module.scss'
import ChartItem from '../ChartItem/ChartItem'

const ChartInput = ({data, setData}) => {

  const onAddNewField = () =>{
    setData(prev => [...prev, {label: 'Red', data: 1}])
  }

  const onDeleteNewField = () =>{
    console.log('fdfd')
    setData(prev => prev.slice(0, -1))
  }

  return (
    <div className={styles.items}>
      <h2 className={styles.title}>Cоздание</h2>
      <div className={styles.content}>
        <div className={styles.list}>
          {data.map((el, index) => 
            <ChartItem
              id={index}
              data={data}
              setData={setData}
              key={index}
              label={el.label}
              value={el.data}
            />
          )}
        </div>
        <div className={styles.contentButtons}>
          <button className={styles.button}>+</button>
          <button className={styles.button}>-</button>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={onAddNewField} className={styles.button}>Добавить</button>
        <button onClick={onDeleteNewField} disabled={data.length === 1 && true} className={styles.button}>Удалить</button>
      </div>
    </div>
  )
}

export default ChartInput