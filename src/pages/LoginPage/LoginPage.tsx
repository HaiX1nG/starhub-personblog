import React from 'react'
import style from './LoginPage.module.css'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {
  return (
    <div className={style.main}>
      <LoginForm />
    </div>
  )
}

export default LoginPage