import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// 引入页面组件
import Loading from '../components/Loading/Loading'
const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const MainVeiw = lazy(() => import('../components/MainVeiw/MainVeiw'))
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'))
const ArticlePage = lazy(() => import('../pages/ArticlePage/ArticlePage'))
const UserManagement = lazy(() => import('../pages/UserManagement/UserManagement'))
const Own = lazy(() => import('../components/Own/Own'))
const UserManage = lazy(() => import('../components/UserManage/UserManage'))
const BlogUpload = lazy(() => import('../components/BlogUpload/BlogUpload'))
const NotFound = lazy(() => import('../pages/404NotFound/NotFound'))

const AppRouter: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 250) // 控制加载动画显示3秒
    return () => clearTimeout(timer);
  }, [])

  return (
    <Router>
      {showLoading ? <Loading /> : (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Navigate to='/home' replace />}  />
            <Route path='/home/*' element={<HomePage />}>
              <Route index  element={<MainVeiw />} />
              <Route path='article' element={<ArticlePage />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            {/* <Route "} path='/article' element={<ArticlePage />} /> */}
            <Route path='/usermanagement' element={<Navigate to='/usermanagement/own' replace />} />
            <Route path='/usermanagement/*' element={<UserManagement />}>
              <Route path='own' element={<Own />} />
              <Route path='usermanage' element={<UserManage />} />
              <Route path='blogupload' element={<BlogUpload />} />
            </Route>
            {/* 如果访问路径不为Route定义的路径则返回一下404NotFound. */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      )
      }
    </Router >
  )
}

export default AppRouter