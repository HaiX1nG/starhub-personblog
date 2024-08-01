import React from 'react'
import { Alert, Flex, Spin } from 'antd';
import style from './Loading.module.css'

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const Loading = () => {
  return (
    <div className={style.main}>
      <Flex gap="large" vertical>
        <Flex gap="large">
          <Spin tip="Loading" size="large">
            {content}
          </Spin>
        </Flex>
      </Flex>
    </div>
  )
}

export default Loading