import React from 'react'
import style from './Loading.module.css'

const Loading = () => {
  return (
    <div className={style.main}>
      <div className={style.loading}>
        <div className={style.item} style={{ animationDelay: '-0.9s', backgroundColor: 'rgb(254, 5, 0)' }}></div>
        <div className={style.item} style={{ animationDelay: '-0.8s', backgroundColor: 'rgb(255, 190, 0)' }}></div>
        <div className={style.item} style={{ animationDelay: '-0.7s', backgroundColor: 'rgb(84, 249, 0)' }}></div>
        <div className={style.item} style={{ animationDelay: '-0.5s', backgroundColor: 'rgb(48, 160, 240)' }}></div>
        <div className={style.item} style={{ animationDelay: '-0.4s', backgroundColor: 'rgb(103, 0, 115)' }}></div>
      </div>
      <div>
        <h2>Loading...</h2>
      </div>
    </div>
  )
}

export default Loading