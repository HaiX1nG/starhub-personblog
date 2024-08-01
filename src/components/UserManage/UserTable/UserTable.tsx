import React from 'react'
import { Space, Table, Tag, Pagination } from 'antd'
import style from './UserTable.module.css'
import type { PaginationProps } from 'antd'

const { Column, ColumnGroup } = Table

interface DataType {
  key: React.Key
  userName: string
  nickName: string
  email: string
  address: string
  tags: string[]
}

const data: DataType[] = [
  {
    key: '1',
    userName: 'John',
    nickName: 'Brown',
    email: "xxxxxxxxxx@qq.com",
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    userName: 'Jim',
    nickName: 'Green',
    email: "xxxxxxxxxx@qq.com",
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    userName: 'Joe',
    nickName: 'Black',
    email: "xxxxxxxxxx@qq.com",
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

const onChange: PaginationProps['onChange'] = (pageNumber) => {
  console.log('Page: ', pageNumber)
}

const UserTable = () => {
  return (
    <div className={style.main}>
      <div>
        <Table
          dataSource={data}
          pagination={false}
        >
          <ColumnGroup title="Name">
            <Column title="User Name" dataIndex="userName" key="userName" />
            <Column title="Nick Name" dataIndex="nickName" key="nickName" />
          </ColumnGroup>
          <Column title="E-mail" dataIndex="email" key="email" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags: string[]) => (
              <>
                {tags.map((tag) => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag === 'loser') {
                    color = 'volcano';
                  }
                  return (
                    <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(_: any, record: DataType) => (
              <Space size="middle">
                <a>Invite {record.nickName}</a>
                <a>Delete</a>
              </Space>
            )}
          />
        </Table>
      </div>
      <div className={style.spacer}></div>
      <div>
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      </div>
    </div>
  )
}

export default UserTable