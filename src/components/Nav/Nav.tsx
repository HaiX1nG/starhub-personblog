import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, message, Space } from 'antd'
import style from './Nav.module.css'

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`);
}

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
]

const Nav = () => {
  return (
    <div className={style.nav}>
      <Dropdown menu={{ items, onClick }} placement='bottom'>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <div className={style.nav_items}>首页</div>
          </Space>
        </a>
      </Dropdown>

      <Dropdown menu={{ items, onClick }} placement='bottom'>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <div className={style.nav_items}>个人中心</div>
          </Space>
        </a>
      </Dropdown>

      <Dropdown menu={{ items, onClick }} placement='bottom'>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <div className={style.nav_items}>关于我们</div>
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}

export default Nav