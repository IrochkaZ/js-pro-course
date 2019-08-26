import React, { Component } from 'react';

export default class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    counterMinus = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    counterPlus = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    counterRefresh = () => {
        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div className='clicker'>
                <p className="counter">{this.state.count}</p>
                <div className='wrapper-but'>
                    <button className="button btn plus" onClick={this.counterPlus}>+</button>
                    <button className="button btn refresh" onClick={this.counterRefresh}>↺</button>
                    <button className="button btn minus" onClick={this.counterMinus}>&minus;</button>
                </div>
            </div>
        );
    }
}
