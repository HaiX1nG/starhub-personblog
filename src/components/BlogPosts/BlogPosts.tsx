import React from 'react'
import { Card, Space } from 'antd'

const BlogPosts = () => {
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <a href="/home/article">
          <Card title="Card" hoverable={true} size="small">
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </a>
        <a href="/home/article">
          <Card title="Card" hoverable={true} size="small">
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </a>
        <a href="/home/article">
          <Card title="Card" hoverable={true} size="small">
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </a>
        <a href="/home/article">
          <Card title="Card" hoverable={true} size="small">
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </a>
        <a href="/home/article">
          <Card title="Card" hoverable={true} size="small">
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </a>
      </Space>
    </div>
  )
}

export default BlogPosts