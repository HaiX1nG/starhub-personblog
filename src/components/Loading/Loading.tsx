import React from 'react'
import style from './Loading.module.css'

const Loading = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <div className={style.loading}>
          <div className={style.item} style={{ animationDelay: '-0.9s', backgroundColor: 'rgb(254, 5, 0)' }}></div>
          <div className={style.item} style={{ animationDelay: '-0.8s', backgroundColor: 'rgb(255, 190, 0)' }}></div>
          <div className={style.item} style={{ animationDelay: '-0.7s', backgroundColor: 'rgb(84, 249, 0)' }}></div>
          <div className={style.item} style={{ animationDelay: '-0.6s', backgroundColor: 'rgb(48, 160, 240)' }}></div>
          <div className={style.item} style={{ animationDelay: '-0.5s', backgroundColor: 'rgb(103, 0, 115)' }}></div>
        </div>
        <div className={style.loading}>
          <div className={style.item_font} style={{ animationDelay: '-1.1s'}}>L</div>
          <div className={style.item_font} style={{ animationDelay: '-1.0s' }}>o</div>
          <div className={style.item_font} style={{ animationDelay: '-0.9s'}}>a</div>
          <div className={style.item_font} style={{ animationDelay: '-0.8s'}}>d</div>
          <div className={style.item_font} style={{ animationDelay: '-0.7s'}}>i</div>
          <div className={style.item_font} style={{ animationDelay: '-0.6s'}}>n</div>
          <div className={style.item_font} style={{ animationDelay: '-0.5s'}}>g</div>
          <div className={style.item_font} style={{ animationDelay: '-0.4s'}}>.</div>
          <div className={style.item_font} style={{ animationDelay: '-0.3s'}}>.</div>
          <div className={style.item_font} style={{ animationDelay: '-0.2s'}}>.</div>
        </div>
      </div>
    </div>
  )
}

export default Loading