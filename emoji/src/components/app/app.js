import React, { Component } from 'react';
import Container from '../container'
import './app.css';

import emojiList from '../../data/emojiList.json';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sort: emojiList,
            inputValue: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;

        if (value.length > 0) {
            this.setState({ inputValue: true });
        } else {
            this.setState({ inputValue: false });
        }

        const sort = emojiList.filter((emoji) => {
            if (emoji.keywords.toLowerCase().indexOf(value.toLowerCase()) >= 0 || emoji.title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                return emoji.title;
            }
        });

        this.setState({ sort });
    }

    render() {
        return (
            <Container data={[this.state, this.handleChange]} />
        )
    }
}