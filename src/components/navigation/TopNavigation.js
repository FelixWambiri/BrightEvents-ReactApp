import React from 'react';
import {Menu, Dropdown } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'; 
import { Input} from 'semantic-ui-react'

class TopNavigation extends React.Component{
    state = {activeItem:'Dashboard'}
    handleItemClick=(e,{name})=>this.setState({activeItem:name})
    render(){
        const {activeItem} =this.state
        const {logout} = this.props
        return(
            <Menu inverted>
                <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick} />
                <Menu.Item name='All Events' active={activeItem === 'All Events'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} onClick={()=> logout()}>
                    <a className='item'>Logout<i className='sign out icon'></i></a> 
                </Menu.Item>                     
                </Menu.Menu>
            </Menu>
        );
    }
}

TopNavigation.propTypes ={
    logout: PropTypes.func.isRequired
}; 

function mapStateToProps(state){
    return{
        user: state.user
    };
}
export default connect(mapStateToProps, {logout})(TopNavigation);