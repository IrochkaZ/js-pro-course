import React, { Component, Fragment } from 'react';
import './emo-container.css';
import EmoItem from '../emo-item';

export default class EmoContainer extends Component {

    setLister() {
        const { data } = this.props;
        return data.sort.map((emo, index) => {

            if (data.inputValue === true && index < 15) {
                return <EmoItem key={Math.random()} symbol={emo.symbol} title={emo.title} />
            }

            if (data.inputValue === false) {
                return <EmoItem key={Math.random()} symbol={emo.symbol} title={emo.title} />
            }
        });
    }

    render() {
        return (
            <Fragment>
                <ol>
                    {this.setLister()}
                </ol>
            </Fragment>
        )
    }
}
