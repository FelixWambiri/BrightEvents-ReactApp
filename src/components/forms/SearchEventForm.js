import React from 'react';
import axios from 'axios';
import {Input} from "semantic-ui-react"

class SearchEventForm extends React.Component{
    state = {
        query : '',
        loading : false,
        events : {}
    }

    onSearchChange = (e, data) =>{
        clearTimeout(this.timer);
        this.setState({
            query : data
        });
        this.timer = setTimeout(this.fetchOptions, 1000);
    };
    onChange = (e) => {
        const {onSearch} = this.props;
        const {value} = e.target
        this.setState({query : value });
        onSearch(value)
    };
    render(){
        const {searching} = this.props;
        return(
            <div className="ui search">
                <Input fluid style={{height:50,marginTop:20,marginBottom:20}} loading={searching?true:false}  placeholder="Search" value={this.state.query}
                    onChange = {this.onChange}
                />
            </div>
        );
    }
}
export default SearchEventForm;