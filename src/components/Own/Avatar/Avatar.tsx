import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar as A } from 'antd';

const Avatar = () => {
  return (
    <div>
      <A shape="square" size={100} icon={<UserOutlined />} />
    </div>
  )
}

export default Avatar