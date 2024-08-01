import React from 'react'
import style from './HomePage.module.css'
import TopNav from '../../components/TopNav/TopNav'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={style.home_page}>
      <TopNav />
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage