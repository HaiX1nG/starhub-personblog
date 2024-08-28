import React from 'react'
import Breadcrumb from '../../components/BreadcRumb/BreadcrumbComponent'
import { Card } from 'antd'
import style from './ArticlePage.module.css'
import ContentShow from '../../components/ContentShow/ContentShow'

const content: string = "# 这是一条markdown测试文本, *你好*"

const ArticlePage = () => {
  return (
    <div className={style.main}>
      <div className={style.card}>
        <Card
          title={
            <div className={style.content}>
              <div className={style.breadcrumb}>
                <Breadcrumb />
              </div>
              <h1>Title</h1>
            </div>
          }
          hoverable={true}
          style={{minHeight: '565px', maxHeight: 'auto'}}
        >
          <div className={style.content}>
            <div>
              <p>test <br /> 第二行</p>
              <ContentShow content={content} />
            </div>
            <div className={style.who_date}>
              <p>
                <b>作者:</b> xxx
                <br />
                <b>发布日期:</b>xxxx-xx-xx
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ArticlePage