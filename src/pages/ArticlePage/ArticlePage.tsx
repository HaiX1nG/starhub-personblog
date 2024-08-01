import React from 'react'
import Breadcrumb from '../../components/BreadcRumb/BreadcrumbComponent'
import { Card } from 'antd'
import style from './ArticlePage.module.css'

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