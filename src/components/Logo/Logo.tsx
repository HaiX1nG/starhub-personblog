import React from 'react'
import blog from '../../assets/blog.svg'
import style from './Logo.module.css'

interface IProps {
  width: string
  height: string
  color: string
  fontSize: string
  display: string
}

const Logo = (props: IProps) => {
  return (
    <div className={style.main}>
      <img src={blog} alt="logo" style={{ width: props.width, height: props.height }} />
      &nbsp;
      <div style={{ display: props.display }}><b style={{ color: props.color, fontSize: props.fontSize }}>StarHub</b></div>
    </div>
  )
}

export default Logo