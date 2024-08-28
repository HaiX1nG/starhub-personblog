import React, { useEffect, useState } from 'react'
import instance from '../../request/request';
import axios from 'axios';

interface IUserData {
  Uuid: number
  Username: string
  Password: string
  Nickname: string
  Email: string
  PhoneNumber: string
  Gender: string
  ArticlesNum: number
}

const JsonData = () => {
  const [userData, setUserData] = useState<IUserData[] | null>(null)

  useEffect(() => {
    const data = instance.get('/user')
      .then(res => {
        const result: any = res
        const code: number = result.code
        if (code === 200) {
          console.log("HTTP status", code)
          setUserData(result.result)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  console.log(userData)

  return (
    <div>
      <h1>JsonData</h1>
      {/* {userData === null ? <h2>loading...</h2> : <pre>{JSON.stringify(userData, null, 4)}</pre>} */}
      {
        userData === null ?
          <h2>loading...</h2>
          :
          <ul>
            {userData.map((user, index) => (
              <li key={user.Uuid}>
                <hr />
                <p>{user.Uuid}</p>
                <p>{user.Username}</p>
                <p>{user.Password}</p>
                <p>{user.Nickname}</p>
                <p>{user.Email}</p>
                <p>{user.PhoneNumber}</p>
                <p>{user.ArticlesNum}</p>
              </li>
            ))
            }
          </ul>
      }
    </div>
  )
}

export default JsonData