import React, { Component } from 'react';
import Clicker from './Clicker';

class App extends Component {
    render() {
        return (
            <div className='clicker-wrap'>
                <Clicker />
                <Clicker />
                <Clicker />
            </div>
        )
    }
}

export default App;