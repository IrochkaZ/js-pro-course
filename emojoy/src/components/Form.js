import React, { Component } from 'react';
import emojiList from './emojiList.json';


const Student = (props) => <li className="student-item">{props.name}</li>;

class Emoji extends Component {
    handleChange (event) {
    this.props.updateSearch(event.target.value);
    }
render () {
    return (
        <input type="text" placeholder="Find an emoji" className="input-search" onChange={this.handleChange.bind(this)} value={this.props.searchText} />
    )
    }
}





class EmojiList extends Component {

    filter (title,symbol) {
    if (!this.props.filter) {
        return students
    }
    return students.filter((student) => student.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0)
}
    render () {
    return (
        <ul className="students-list">
            {this.filter(this.props.students)
            .map((student) => <Student name={student}></Student>)}
        </ul>
    )
    }
};

class Form extends React.Component {

    constructor () {
    super();
    const EMOJI = {emojiList};

    this.state = {
        students: EMOJI,
        filter: null
    };
    }

    updateSearch (inputValue) {
    let filter = this.state.filter;

    this.setState({
        filter: inputValue
    });
    }

    render () {
    return (
    <div className="form">
        <h1 className="form__title">Enter Emoji</h1>
        <Emoji updateSearch={this.updateSearch.bind(this)} searchText={this.state.filter} />
        <EmojiList filter={this.state.filter} students={this.state.students}></EmojiList>
    </div>
    );
}
}

export default Form;