import React, { Component } from 'react';
import emojiList from './emojiList.json';

export default class EmojiForms extends Component {
  constructor(props) {
    super(props);
    this.state = { sort: emojiList };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    // eslint-disable-next-line array-callback-return
    const sort = emojiList.filter((emoji) => {
      if (emoji.keywords.toLowerCase().indexOf(value.toLowerCase()) >= 0 || emoji.title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        return emoji.title;
      }
    });
    this.setState({ sort });
  }

  handleSubmit(emoji, keyword) {

    return <li key={keyword} className='list-emoji'><span>{emoji.symbol}</span> {emoji.title}</li>
  }

  render() {
    return (
      <div className='main'>
        <input type='text' onChange={this.handleChange} placeholder='Enter text smile' className='input-search' />
        <ul className='form-list-emoji'>
          {this.state.sort.map(this.handleSubmit)}
        </ul>
      </div>
    );
  }
}

