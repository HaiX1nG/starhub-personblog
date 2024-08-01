import React from 'react'
import style from './LoginOrRegister.module.css'

const LoginOrRegister = () => {
  return (
    <div className={style.main}>
      <a href="/login">Login</a>
      /
      <a href="/register">Register</a>
    </div>
  )
}

export default LoginOrRegister