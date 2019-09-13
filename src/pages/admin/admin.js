import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'

import { Layout } from 'antd'


import memeoryUtils from '../../utils/memoryUtils';
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../home/home'
import User from '../user/user'
import Role from '../role/role'
import Device from '../device/device'
import Category from '../category/category'
import Order from '../order/order'


const { Footer, Sider, Content } = Layout
class Admin extends Component {

    render() {
        const user = memeoryUtils.user
        if(!user.id) {
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{height: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{backgroundColor: 'white'}}>
                        <Switch>
                            <Redirect from='/' exact to='/home'/>
                            <Route path='/home' component={Home}/>
                            <Route path='/user' component={User}/>
                            <Route path='/role' component={Role}/>
                            <Route path='/category' component={Category}/>
                            <Route path='/device' component={Device}/>
                            <Route path="/order" component={Order}/>
                        </Switch>

                    </Content>
                    <Footer style={{textAlign: 'center', color: '#aaaaaa'}}>推荐使用谷歌浏览器，
                        可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;