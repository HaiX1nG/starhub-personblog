import React from 'react'
import male from '../../assets/male.svg'
import female from '../../assets/female.svg' 
import { LockOutlined, UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { Form, Input, Button, Select } from 'antd'
import style from './RegisterForm.module.css'
import { useForm } from 'antd/es/form/Form'

const { Option } = Select

const RegisterForm = () => {

  const onFinish = (value: any) => {
    console.log('Received values of form: ', value)
  }

  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ backgroundColor: "rgba(255, 255, 255, 0.75)", width: 70, }} placeholder="+86" value="86">
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  )

  return (
    <div className={style.main}>
      <div>
        <Form
          name='register_form'
          className='register-form'
          onFinish={onFinish}
          form={form}
          style={{ maxWidth: 450 }}
          scrollToFirstError
        >
          <h2>注&nbsp;册</h2>
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: "请输入您的用户名", whitespace: true }]}
            hasFeedback
          >
            <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='请输入您的用户名' />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: "请设置您的密码", whitespace: true }]}
            hasFeedback
          >
            <Input.Password prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='请输入您的密码' />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="再次确认密码"
            dependencies={['password']}
            rules={[{ required: true, message: "请确定您设置的密码" }, ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('您输入的新密码不匹配'))
              },
            }),
            ]}
            hasFeedback
          >
            <Input.Password prefix={<LockOutlined className='site-form-item-icon' />} placeholder='请二次确认您的密码' />
          </Form.Item>
          <Form.Item
            name="nickname"
            label="昵称"
            tooltip="用于告诉其他人您的别名"
            rules={[{ required: true, message: "请输入您的昵称", whitespace: true }]}
            hasFeedback
          >
            <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='请输入您的昵称' />
          </Form.Item>
          <Form.Item
            name="phone"
            label="电话号码"
            rules={[{ required: true, message: "请输入您的电话号码", whitespace: true }]}
            hasFeedback
          >
            <Input addonBefore={prefixSelector} prefix={<PhoneOutlined className='site-form-item-icon' />} style={{ width: "100%" }} placeholder='请输入你的电话号码' />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[{ type: 'email', message: "您输入的邮箱格式不正确" }, { required: true, message: "请输入您的邮箱" }]}
            hasFeedback
          >
            <Input prefix={<MailOutlined className='site-form-item-icon' />} placeholder='请输入您的邮箱' />
          </Form.Item>
          <Form.Item
            name="gender"
            label="性别"
            rules={[{ required: true, message: "请选择您的性别" }]}
            hasFeedback
          >
            <Select placeholder="请选择您的性别">
              <Option value="male"><img src={male} alt="male" style={{width:14, height:14}} />&nbsp;Male</Option>
              <Option value="Female"><img src={female} alt="female" style={{width:14, height:14}} />&nbsp;Female</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            {/* <button type="submit" className={style.register_form_button}>注&nbsp;册</button> */}
            <div className={style.register_form_button} onClick={() => form.submit()}>注&nbsp;册</div>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default RegisterForm