import React from 'react'
import style from './UerManage.module.css'
import UserTable from './UserTable/UserTable'

const UserManage = () => {
  return (
    <div className={style.main}>
      <UserTable />
    </div>
  )
}

export default UserManage