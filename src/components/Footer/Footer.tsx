import React from 'react'
import { QqOutlined, WechatFilled, MailOutlined } from '@ant-design/icons'
import style from './Footer.module.css'

const Footer = () => {
  return (
      <div className={style.footer}>
        <p>关于我: 我是一名在校大学生，本网站用于上传自己的学习笔记。<br />
        联系方式: <br />
        <QqOutlined />: 1465439890 <br />
        <WechatFilled />: x1465439890 <br />
        <MailOutlined />: 1465439890@qq.com <br />
        </p>
      </div>
  )
}

export default Footer