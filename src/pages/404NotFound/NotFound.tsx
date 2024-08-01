import React from 'react'
import { CloseCircleTwoTone } from '@ant-design/icons'
import style from './NotFount.module.css'

const NotFount = () => {
  return (
    <div className={style.main}>
      <p className={style.icon}>
        <CloseCircleTwoTone twoToneColor='#ff0000'/>
      </p>
      <p className={style.info}>
        <b style={{fontSize: '35px', color: '#ff0000'}}>Error:</b> 404 Not Fount!
        <br />
        <b style={{fontSize: '35px', color: '#ff0000'}}>错误:</b> 状态码404, 页面不见了～
      </p>
    </div>
  )
}

export default NotFount