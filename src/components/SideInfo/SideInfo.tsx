import React from 'react'
import { Card } from 'antd'
import style from './SideInfo.module.css'

const SideInfo = () => {
  return (
    <div className={style.main}>
        <Card
            title="今日热门博客榜单TOP5" bordered={false} style={{ width: '100%' }}
            hoverable={true}
        >
            <Card size="small">
              <p>1. Hadoop集群搭建</p>
            </Card>
            <Card size="small">
              <p>2. Spark数据清洗</p>
            </Card>
            <Card size="small">
              <p>3. Python爬虫</p>
            </Card>
            <Card size="small">
              <p>4. Golang编程基础</p>
            </Card>
            <Card size="small">
              <p>5. Java高级开发</p>
            </Card>
        </Card>
    </div>
  )
}

export default SideInfo