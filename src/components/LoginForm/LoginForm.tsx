import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, message } from 'antd'
import style from './LoginForm.module.css'
import instance from '../../request/request'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'antd/es/form/Form'

const LoginForm = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({}) // 用于传递用户的登录信息
  const [form] = useForm()

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
    const submitForm = instance.post('/login', values)
      .then(response => {
        const result: any = response.data
        setUserInfo(result)
        if (result.code === 200) {
          message.success("登录成功！欢迎" + result.usernameAndPassword.Username, 3)
          console.log(result.code);
          setTimeout(() => {
            navigate("/usermanagement")
          }, 2000)
        }
      }).catch((error) => {
        if (error.response.status === 500) {
          message.error("用户不存在或密码错误，检查用户名或密码是否正确！" + error, 3)
        } else if (error.response.status === 400) {
          message.error("用户名或密码不能为空！" + error, 3)
        }
      })
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      form.submit()
    }
  }

  console.log(userInfo);


  return (
    <div className={style.main}>
      <div>
        <Form
          name="normal_login"
          className="login-form"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ maxWidth: 450 }}
          scrollToFirstError
          onKeyDown={handleKeyDown}
        >
          <h2>登&nbsp;录</h2>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入您的用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入您的密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              忘记了密码？
            </a>
          </Form.Item>
          <Form.Item>
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
              <div className={style.login_form_button} onClick={() => form.submit()}>
                登&nbsp;录
              </div>
              <div style={{textAlign: 'center', position: 'relative', top: '5px'}}>&nbsp;或 <a href="/register">现在注册！</a></div>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginForm