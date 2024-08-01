import React from 'react'
import { Space, Avatar, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Link } from 'react-router-dom';

interface IProps {
  marginLeft: string
}

const items: MenuProps['items'] = [
  {
    label: (
      <Link to="/usermanagement/own">
        个人信息
      </Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link to="/">
        注销
      </Link>
    ),
    key: '1',
  }
]

const UserShow = (props: IProps) => {
  return (
    <div style={{ marginLeft: props.marginLeft }}>
      <Space size={16}>
        <Avatar size={40}>USER</Avatar>
        <Dropdown menu={{ items }}>
          <a style={{color: '#000'}} onClick={(e) => e.preventDefault()}>
            <Space>
              Username
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Space>
    </div>
  )
}

export default UserShow