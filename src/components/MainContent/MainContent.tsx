import React from 'react'
import style from './MainContent.module.css'
import SideInfo from '../SideInfo/SideInfo'
import BlogPosts from '../BlogPosts/BlogPosts'

const MainContent = () => {
  return (
    <div className={style.main}>
      <div className={style.side_info}>
        <SideInfo />
      </div>
      <div className={style.blog_posts}>
        <BlogPosts />
      </div>
    </div>
  )
}

export default MainContent