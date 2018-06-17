import React from 'react';
import {Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'; 
import { Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
class TopNavigation extends React.Component{
    constructor(props){
        super(props)
       this.renderNav = this.renderNav.bind(this)
    }
    state = {activeItem:'Dashboard'}
    handleItemClick=(e,{name})=>this.setState({activeItem:name})
    
    renderNav(){
        
        const {activeItem} =this.state
        const {loggedIn,logout} = this.props;
        if (loggedIn){
            return <Menu inverted pointing>
            <Menu.Item as={Link} to="/" name='Homepage' active={activeItem === 'Homepage'} onClick={this.handleItemClick}>
                <i className='home icon'> </i>Bright Events
            </Menu.Item>
            <Menu.Item as={Link} to="/dashboard" name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
                <a   onClick={()=> logout()} className='item'>Logout<i className='sign out icon'></i></a> 
            </Menu.Menu>
        </Menu>
        }else {
            return (
            <Menu inverted pointing>
                <Menu.Item as={Link} to="/" name='Homepage' active={activeItem === 'Homepage'} onClick={this.handleItemClick}>
                    <i className='home icon'> </i>Bright Events
                </Menu.Item>
                <Menu.Item position='right' as={Link} to="/login" name="Login/Signup">
                        <i className="lock icon"/> Login/Signup
                </Menu.Item>
            </Menu>
            )
            
        }
    }
    render(){
        const {activeItem} =this.state
        return(
                <div>
                    {
                        this.renderNav()
                    }
                </div>
                
            
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