import React, { useEffect, useState } from 'react'
import style from './Clock.module.css'

const Clock = ({ onChange }: any) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    if (onChange) {
      onChange(currentTime.toLocaleTimeString().split(':'))
    }

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <div className={style.main}>
      <p>当前时间：{currentTime.toLocaleDateString()}&nbsp;{currentTime.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock