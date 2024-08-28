import React, { ReactHTMLElement, useState } from 'react'
import instance from '../../request/request'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd/lib'

const PostFormData = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ username: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    const submitForm = instance.post('/login', formData)
      .then(res => {
        const result: any = res
        if (result.code === 200) {
          navigate('/usermanagement')
          message.success(result.usernameAndPassword.Username)
        }
      }).catch((e) => {
        console.log(e);
      })
  }

  return (
    <div>
      <form action="/login" method='post' onSubmit={submitHandle}>
        <label htmlFor="username">username: </label>
        <input type="text" name='username' id='username' value={formData.username} placeholder='请输入您的用户名' onChange={handleChange} />
        <br />
        <label htmlFor="password">password: </label>
        <input type="password" name='password' id='password' value={formData.password} placeholder='请输入您的密码' onChange={handleChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default PostFormData