import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  TeamOutlined
} from '@ant-design/icons'
import { Button, Layout, Menu, message, theme } from 'antd'
import BreadcrumbComponent from '../../components/BreadcRumb/BreadcrumbComponent'
import { useNavigate, Routes, Route } from "react-router-dom"
import style from './UserManagement.module.css'
import Own from '../../components/Own/Own'
import UserManage from '../../components/UserManage/UserManage'
import BlogUpload from '../../components/BlogUpload/BlogUpload'
import Footer from '../../components/Footer/Footer'
import Logo from '../../components/Logo/Logo'
import Clock from '../../components/Clock/Clock'
import morning from '../../assets/morning.svg'
import tree from '../../assets/tree.svg'
import lunch from '../../assets/lunch.svg'
import afternoon from '../../assets/afternoon.svg'
import moon from '../../assets/moon.svg'
import midnight from '../../assets/midnight.svg'
import UserShow from '../../components/UserShow/UserShow'


const { Header, Sider, Content } = Layout

const UserManagement = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const [display, setDisplay] = useState('block')

  const handleTimeUpdate = (newTime: string) => {
    const time: number = parseInt(newTime[0])
    if (time >= 8 && time <= 11) {
      message.success({
        content: '上午好！{username} 今天也要好好生活哟～',
        icon: <img src={tree} alt='morning' className={style.icons} />,
      }, 3)
    } else if (time === 12) {
      message.success({
        content: '中午好！{username} 中午也要好好吃饭哟～',
        icon: <img src={lunch} alt="lunch" className={style.icons} />,
      }, 3)
    } else if (time >= 13 && time <= 17) {
      message.success({
        content: '下午好！{username} 需要点一杯下午茶放松一下吗？',
        icon: <img src={afternoon} alt='afternoon' className={style.icons} />,
      }, 3)
    } else if (time >= 18 && time <= 23) {
      message.success({
        content: '晚上好！{username} 今天您工作很努力呢！在工作之余也要好好休息哟～',
        icon: <img src={moon} alt='night' className={style.icons} />,
      }, 3)
    } else if (time >= 0 && time <= 4) {
      message.success({
        content: '深夜了！{username} 睡不着吗？努力的同时也要注意身体呀～',
        icon: <img src={midnight} alt='midnight' className={style.icons} />,
      }, 3)
    } else if (time >= 5 && time <= 7) {
      message.success({
        content: '早上好！{username} 准备好开启美好的一天了吗？今天也要吃早饭哟～',
        icon: <img src={morning} alt='morning' className={style.icons} />,
      }, 3)
    }
  }

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const toggleCollapsed = () => {
    const nextCollapsed = !collapsed
    setCollapsed(nextCollapsed)
    setDisplay(nextCollapsed ? 'none' : 'block')
  }

  return (
    <div className={style.main}>
      <Layout style={{ minWidth: '100%', minHeight: '100%' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          theme='dark'
        >
          <div className="demo-logo-vertical">
            <Logo width='40px' height='40px' color='#fff' fontSize='35px' display={display} />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: '个人信息',
                onClick: () => navigate('/usermanagement/own'),
              },
              {
                key: '2',
                icon: <TeamOutlined />,
                label: '用户管理',
                onClick: () => navigate('/usermanagement/usermanage'),
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: '博客发布',
                onClick: () => navigate('/usermanagement/blogupload'),
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer, display: 'flex' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleCollapsed}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Clock onChange={handleTimeUpdate} />
            <UserShow marginLeft='65%' />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <BreadcrumbComponent />
            <Routes>
              <Route path='/own' element={<Own />} />
              <Route path='/usermanage' element={<UserManage />} />
              <Route path='/blogupload' element={<BlogUpload />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  )
}

export default UserManagement