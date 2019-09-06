import React, { Component } from 'react';
import './container.css';
import Form from '../form';
import EmoContainer from '../emo-container';

export default class Container extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className='main'>
                <Form searchField={data[1]} />
                <EmoContainer data={data[0]} />
            </div>
        )
    }

}