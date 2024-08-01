import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import style from './RegisterPage.module.css'

const RegisterPage = () => {
  return (
    <div className={style.main}>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage