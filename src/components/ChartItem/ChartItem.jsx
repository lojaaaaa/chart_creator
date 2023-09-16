import React, { useState } from 'react'
import styles from './ChartItem.module.scss'

const ChartItem = ({label, value, data, setData, id}) => {

  const [labelValue, setLabelValue] = useState(label)
  const [dataValue, setDataValue] = useState(value)

  const onLabelChange = (e) =>{
    setLabelValue(e.target.value)
    
    const filteredData = data.map((d, index) => index === id ? {...d, label: e.target.value} : d)
    setData(filteredData)
  }

  const onDataChange = (e) =>{
    setDataValue(e.target.value)

    const filteredData = data.map((d, index) => index === id ? {...d, data: e.target.value} : d)
    setData(filteredData)
  }

  return (
    <div className={styles.item}>
    <input
      value={labelValue}
      onChange={onLabelChange}
      defaultValue={label} 
      className={styles.input} 
      type="text"
    />
    <input
      value={dataValue}
      onChange={onDataChange}
      defaultValue={value} 
      className={styles.input} 
      type="number" 
    />
  </div>
  )
}

export default ChartItem