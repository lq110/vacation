import React, { Component } from 'react'
import LayOut from './layout/' //布局组件
import Home from './home/' //home页面
import Happy from './happy/' //欢度国庆
import Talk from './talk/' //聊聊往事
export default class index extends Component {
  constructor() {
    super()
    this.state = {
      currentHash: window.location.hash.slice(1) || 'home1', //当前hash值
      sleceted:
        window.location.hash.slice(window.location.hash.length - 1) || '1' //被选中的导航索引
    }
    console.log(window.location.hash)
    console.log(window.location.hash.length)
    console.log(this.state.sleceted)
    // 将当前state设置为hash值
    window.location.hash = this.state.currentHash

    // 监听当前hash值来改变state值
    window.onhashchange = () => {
      this.setState({
        currentHash: window.location.hash.slice(1)
      })
    }
  }

  // 获取当前点击的hash值并且改变state
  getHash = (hash, id) => {
    // 改变当前hash值并且修改state
    window.location.hash = hash
    this.setState({
      currentHash: hash,
      sleceted: id
    })
  }
  render() {
    // 根据当前state判断当前要显示的页面
    let Dom = ''
    switch (this.state.currentHash) {
      case 'home':
        Dom = <Home />
        break
      case 'happy':
        Dom = <Happy />
        break
      case 'talk':
        Dom = <Talk />
        break
      default:
        Dom = <Home />
        window.location.hash = 'home'
    }
    return (
      // 布局组件
      <LayOut gethash={this.getHash} id={this.state.sleceted}>
        {/* 当前页面 */}
        {Dom}
      </LayOut>
    )
  }
}
