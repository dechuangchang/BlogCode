import React, {Component} from 'react';
import './info.scss';
import { Layout, Menu, Icon } from 'antd';
import Message from '../message/main';

const {Header,Sider,Content,Footer} = Layout;
export default function () {
    let that = this;
    return (
        <article className="info">
        
            <Layout style={{height:'100%'}}>
                <Sider trigger={null} collapsible  collapsed={this.state.collapsed}>
                    <Icon className='logo' type="trophy" />
                    <Menu theme="dark" mode="inline" onClick={e=> this.onMenu(e)} selectedKeys={this.state.menuKey}>
                        <Menu.Item key="1">
                            <Icon type="book" />
                            <span>文章</span>
                        </Menu.Item>
                        <Menu.Item disabled key="2">
                            <Icon type="camera" />
                            <span>照片</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="edit" />
                            <span>留言板</span>
                        </Menu.Item>
                        <Menu.Item disabled key="4">
                            <Icon type="solution" />
                            <span>关于我</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 ,marginRight:'16px'}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={e =>this.toggle(e)}
                        />

                        {console.log(this.state.menuKey)}
                        <Message menuKey={this.state.menuKey}/>
                        
                    </Header>
                   
                    
                </Layout>
            </Layout>
        </article>
    );

}

