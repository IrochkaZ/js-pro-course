import React, { Component } from 'react';
import './form.css'

export default class Form extends Component {

    render() {
        const { cb } = this.props;
        return (
            <input type='text' onChange={cb} placeholder='Enter text smile' className='input-search' />
        )
    }
}