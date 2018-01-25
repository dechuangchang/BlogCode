import React, { Component } from 'react';
import './message.scss';
import { Layout} from 'antd';
const {Content} = Layout;
export default function () {
    let that = this;
    
    return (
        
        <Content className='messageContent' style={this.props.menuKey == '3' ? null:{display:'none'}}>
            <div id="SOHUCS" sid="1234234"></div>
        </Content>
                   
    );

}

