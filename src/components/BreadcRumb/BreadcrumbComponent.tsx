import React from 'react'
import { Breadcrumb, Typography } from 'antd';
import { useLocation, Link } from 'react-router-dom';

const { Title } = Typography

type RoutePaths = Record<string, string>

const routePaths: RoutePaths = {
  "/home": "首页",
  "/article": "文章",
  "/login": "登录",
  "/register": "注册",
  "/usermanagement": "用户管理首页",
  "/usermanagement/own": "个人资料",
  "/usermanagement/usermanage": "用户管理",
  "/usermanagement/blogupload": "博客发布"
}

const BreadcrumbComponent = () => {
  const location = useLocation()

  //解析location.pathname以生成面包屑项
  const pathSnippets = location.pathname.split('/').filter(Boolean)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    const name = routePaths[url] || decodeURIComponent(pathSnippets[index])
    const isCurrentPage = index === pathSnippets.length - 1
    // 确保key不为null
    const key = isCurrentPage ? 'current' : url

    return {
      key,
      title: (
        isCurrentPage ? (
          <span>{name}</span>
        ) : (
          <Link to={url}>{name}</Link>
        )
      )
    }
  })

  return (
    <Breadcrumb separator="/ ʕ •ᴥ•ʔ👉 /" items={extraBreadcrumbItems} />
  )
}

export default BreadcrumbComponent