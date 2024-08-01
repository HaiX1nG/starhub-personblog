import React, { useState } from 'react'
import male from '../../../assets/male.svg'
import female from '../../../assets/Female.svg'
import { ManOutlined, WomanOutlined, UserOutlined, MailOutlined } from '@ant-design/icons'
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd'
import style from './UserInfo.module.css'

interface IProps {
  componentDisabled: boolean
}

const { RangePicker } = DatePicker
const { TextArea } = Input

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}

const UserInfo = (props: IProps) => {
  return (
    <div className={style.main}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={props.componentDisabled}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="用于告诉其他人您的别名"
          rules={[{ required: true, message: "请输入您的昵称", whitespace: true }]}
          hasFeedback
        >
          <Input prefix={<UserOutlined className='site-form-item-icon' />} />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "请输入您的用户名", whitespace: true }]}
          hasFeedback
        >
          <Input prefix={<UserOutlined className='site-form-item-icon' />} />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ type: 'email', message: "您输入的邮箱格式不正确" }, { required: true, message: "请输入您的邮箱" }]}
          hasFeedback
        >
          <Input prefix={<MailOutlined className='site-form-item-icon' />} />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
        >
          <Radio.Group>
            {/* <Radio value="Male"><ManOutlined style={{ color: "#0000FF" }} />&nbsp;Male</Radio> */}
            <Radio value="Male"><img src={male} alt="male" style={{width:14, height:14}} />&nbsp;Male</Radio>
            <Radio value="Female"><img src={female} alt="female" style={{width:14, height:14}} />&nbsp;Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  )
}

export default UserInfo