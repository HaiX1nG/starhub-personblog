import React, { useState } from 'react'
import style from './TopNav.module.css'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import LoginOrRegister from '../LoginOrRegister/LoginOrRegister'
import UserShow from '../UserShow/UserShow'

const TopNav = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div>
      <div className={style.top_nav}>
        <div className={style.logo}>
          <Logo width='90px' height='90px' color='#000000' fontSize='45px' display='block' opacity={1} />
        </div>
        <div className={style.search}>
          <Search />
        </div>
        <div className={style.login_or_register}>
          {isLogin ? <LoginOrRegister /> : <UserShow marginLeft='15%' />}
        </div>
        {/* 暂时不用，后面使用登录功能的时候再设置 */}
        {/* <div className={style.login_or_register} onMouseOver={() => setIsLogin(false)}>
          {isLogin ? <LoginOrRegister /> : <UserShow marginLeft='15%' />}
        </div> */}
      </div>
    </div>
  )
}

export default TopNav