//layout布局组件
import React, { Component } from 'react'

import { Layout, Menu } from 'antd'

const { Header, Content } = Layout
// 数据
const menuData = [
  { title: '首页', hash: 'home', id: '1' },
  { title: '欢度国庆', hash: 'happy', id: '2' },
  { title: '聊聊往事', hash: 'talk', id: '3' }
]
export default class LayOut extends Component {
  constructor() {
    super()
  }

  render() {
    // 解构属性传值
    const { gethash, id } = this.props
    console.log(id)
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            {/* 导航部分  */}
            {menuData.map((item, index) => (
              <Menu.Item
                key={item.id}
                onClick={() => gethash(item.hash, item.id)}
              >
                {item.title}
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {/* 插槽的内容 */}
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
