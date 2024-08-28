import React from 'react'
import blog from '../../assets/blog.svg'
import style from './Logo.module.css'

interface IProps {
  width: string
  height: string
  color: string
  fontSize: string
  display: string
  opacity: number
}

const Logo = (props: IProps) => {
  return (
    <div className={style.main}>
      <img src={blog} alt="logo" style={{ width: props.width, height: props.height }} />
      <div style={{ display: props.display }}>
        <span style={{ marginInlineStart: '10px', color: props.color, fontSize: props.fontSize, fontWeight: 'bold', opacity: props.opacity, transition: `opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), margin 0.3s, color 0.3s` }}>
          StarHub
        </span>
      </div>
    </div>
  )
}

export default Logo