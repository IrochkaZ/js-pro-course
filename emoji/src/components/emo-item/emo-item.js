import React, { Component } from 'react';
import './emo-item.css'

export default class EmoItem extends Component {

    render() {
        const { symbol, title } = this.props;
        console.log(this.props);
        return (
            <li className='list-emoji'><span>{symbol}</span> {title}</li>
        )
    }
}