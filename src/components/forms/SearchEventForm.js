import React from 'react';
import { Form,Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import PropTypes from 'prop-types';


class SearchEventForm extends React.Component{
    state = {
        query : '',
        loading : false,
        options : [],
        events : {}
    }

    onSearchChange = (e, data) =>{
        clearTimeout(this.timer);
        this.setState({
            query : data
        });
        this.timer = setTimeout(this.fetchOptions, 1000);
    };
    onChange = (e, data) => {
        this.setState({query : data.value });
        this.props.onEventSelect(this.state.events[data.value]);


    };

    fetchOptions = () => {
        if(!this.state.query) return; // if its empty do nothing 
        this.setState({loading : true});
        const {searchQuery} = this.state.query
        axios.post(`/search`,
        {'category':`${searchQuery}`}, 
        {headers:{ 'Content-Type': 'application/json','Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNTI1MTE2MDg2fQ.XGqbmH5mwsc2qDzx57lJRsuKpa_kFS-4nH-eOva16NU'}
    
    })
        .then(res =>res.data.events)
        .then(events => {
            const options = [];
            const eventsHash = {};
            events.map((event,key)=> {
                eventsHash[event.name] = event;
                options.push({
                    key :key,
                    value: event.name,
                    text: event.name
                });
            });
            this.setState({loading: false, options, events: eventsHash});
        });
    }
    render(){
        console.log("the state is ", this.state.data)
        return(
            <div class="ui search">
                <input class="prompt" type="text" placeholder="Search" value={this.state.data}
                    onSearchChange={this.onSearchChange} 
                    options = {this.state.options}
                    loading = {this.state.loading}
                    onChange = {this.onChange}
                />
            </div>
        );
    }
}

SearchEventForm.propTypes ={
    onEventSelect : PropTypes.func.isRequired
};
export default SearchEventForm;