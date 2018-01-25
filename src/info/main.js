import React  from 'react';
import ReactDOM from 'react-dom';
import renderTpl from './tpl.js';
class Info extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            menuKey:'1'
        };
       
    }
    componentDidMount(){
        
    }
    onMenu(e){
        this.setState({
            menuKey: e.key,
        });
    }
    toggle(){
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
    render() {
        return renderTpl.call(this);
    }
}
export default Info;