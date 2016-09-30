/**
 * 
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link,hashHistory,IndexRoute} from 'react-router';

import About from './components/about.js';
import Inbox from './components/inbox.js';
import Tables from './components/tables.js';
import Tablesdetail from './components/tablesdetail.js';

import 'antd/dist/antd.css';

// 引入Antd的导航组件
import { Menu, Icon} from 'antd';

// 引入主体样式文件
import './main.css'

const SubMenu = Menu.SubMenu

const Sider = React.createClass({
  getInitialState() {
    return {
      current: '2',
      openKeys: [],
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });
  },
  onToggle(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
    });
  },
  render() {
    return (
            <div>
                <div id="leftMenu"> 
                    <img src='assets/images/logo.png' width="50" id="logo"/>
                    <Menu theme="dark"
                        onClick={this.handleClick}
                        style={{ width: 185 }}
                        defaultOpenKeys={['sub1', 'sub2']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                            <Menu.Item key="1"><Link to="/about">关于</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/tables">汇总</Link></Menu.Item>
                            
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
                            <Menu.Item key="3"><Link to="/Inbox">首页</Link></Menu.Item>
                            
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                    	
                        { this.props.children }
                    </div>
                </div>
                
              
            </div>
        );
  },
});




render((
  <Router history={hashHistory}>
    <Route path="/" component={Sider}>
       <IndexRoute component={Tables} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
      <Route path="tables" component={Tables} />
      <Route path="tablesdetail/:sb" component={Tablesdetail} />
      
      
      
      
    </Route>
  </Router>
), document.getElementById('app'))