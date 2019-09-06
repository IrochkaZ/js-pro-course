import React, { Component } from 'react';
import './form.css'

export default class Form extends Component {
    render() {
        const { searchField} = this.props;
        return (
            <input type='text' onChange={searchField} placeholder='Enter text smile' className='input-search' />
        )
    }
}