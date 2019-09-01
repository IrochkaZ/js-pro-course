import React, { Component } from 'react';
import Counter from './counter';

import ButtonGroup from './button-group';

export default class Clicker extends Component {
    state = {
        count: 0,
    }

    counterMinus = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
    counterPlus = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

    counterRefresh = () => {
        this.setState({ count: 0 });
    }

    cbs = {
        'plus': this.counterPlus,
        'refresh': this.counterRefresh,
        'minus': this.counterMinus
    }

    componentDidMount() {
        console.log('componentDidMount()');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }

    render() {
        console.log('render()')
        return (
            <div className='clicker'>
                <Counter cnt={this.state.count} />
                <ButtonGroup cbs={this.cbs} />
            </div>
        );
    }
}
