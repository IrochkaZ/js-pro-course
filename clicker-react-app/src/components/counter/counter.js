import React, { Component } from 'react';
import './counter.css';

export default class Counter extends Component {
    render() {
        const { cnt } = this.props;
        return (
            <p className="counter">{cnt}</p>
        )
    }
}