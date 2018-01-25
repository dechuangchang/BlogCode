import React  from 'react';
import ReactDOM from 'react-dom';
import renderTpl from './tpl.js';
import $ from 'jquery';
class message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            menuKey: null,
        };
       
    }
    componentDidMount(){
        // (function () {
        //     let dom = `<div id="SOHUCS" sid="123456"></div>`;
        //     $('body').append(dom);
        // })();
        // (function () {
        //     let script = `<script charset="utf-8" type="text/javascript" src="https://changyan.sohu.com/upload/changyan.js" ></script>`;
        //     $('body').append(script);
        // })();
        // (function () {
        //     let script = `
        //     <script type="text/javascript">
        //         window.changyan.api.config({
        //         appid: 'cytqfKh3V',
        //         conf: 'prod_2a75a22af816c3de6ed08631375bbbd1'
        //         });
        //     </script>
        //     `;
        //     $('body').append(script);
        // })();
        
  
    }
   
    render() {
        return renderTpl.call(this);
    }
}
export default message;