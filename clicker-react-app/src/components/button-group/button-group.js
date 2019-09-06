import React, { Component } from 'react';
import './button-group.css';
import Button from '../button';


export default class ButtonGroup extends Component {

    data = [
        ['plus', '+', this.props.cbs.plus],
        ['refresh', '↺', this.props.cbs.refresh],
        ['minus', '-', this.props.cbs.minus]
    ];



    render() {
       // console.log(this.props);
        const buttons = this.data.map((button) =>
            <Button key={Math.random()} cls={button[0]} val={button[1]} cb={button[2]} />
        );

        return (
            <div className='wrapper-but'>
                {buttons}
            </div>
        )
    }
}