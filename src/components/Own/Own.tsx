import React, { useState } from 'react'
import { EditTwoTone } from '@ant-design/icons'
import { ProCard } from '@ant-design/pro-components'
import style from './Own.module.css'
import Avatar from './Avatar/Avatar'
import AwatarUpload from './AvatarUpload/AvatarUpload'
import UserInfo from './UserInfo/UserInfo'
import { Space, Button } from 'antd';

const Own = () => {
  // 设置表单是否能被编辑
  const [isActive, setActive] = useState<boolean>(true)

  return (
    <div className={style.main}>
      <ProCard
        title="个人信息"
        style={{ maxWidth: '55%' }}
        bordered
        actions={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 12,
              flex: 1,
              gap: 8,
            }}
            onClick={() => {
              if (isActive === true) {
                setActive(false)
              } else {
                setActive(true)
              }
            }}
          >
            {/* <EditTwoTone key="editing" />
            修改个人信息 */}
            {isActive ?
              <div>
                <EditTwoTone key="editing" />
                修改个人信息
              </div>
              :
              <div>
                <Button type="primary">确&nbsp;认</Button>
                &nbsp;
                <Button>取&nbsp;消</Button>
              </div>
            }
          </div>
        }
      >
        <div className={style.content}>
          <div className={style.user_avatar}>
            <Space align="center">
              <Avatar />
              <AwatarUpload />
            </Space>
          </div>
          <div className={style.user_info}>
            <UserInfo componentDisabled={isActive} />
          </div>
        </div>
      </ProCard>
    </div>
  )
}

export default Own