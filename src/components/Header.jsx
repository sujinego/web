import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <header>
                <h1><a href="#welcome" onClick={function(){
                    this.props.onClick();
                }.bind(this)}></a>WEB</h1>
            </header>
        )
    }
}

export default connect(
    null,
    function(dispatch){
        return {
            onClick:function(){
                dispatch({type:'CHANGE_MODE', mode:'WELCOME'})
            }
        }
    }
)(Header);