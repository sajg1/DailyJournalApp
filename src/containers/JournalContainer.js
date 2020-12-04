import React, {Component} from 'react';
import DailyEntryForm from '../components/DailyEntryForm';
import JournalEntryList from '../components/JournalEntryList';

class JournalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
        id: 1,
        text: "Hello"
        },
        {
        id: 2,
        text: "Hi"
        }
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  };

  handleSubmit(entrySubmitted) {
    entrySubmitted.id = Date.now();
    const updatedEntries = [...this.state.entries, entrySubmitted];
    this.setState({entries: updatedEntries});
  }

  render() {
    return(
      <div>
        <h2>Journal Container</h2>
        <DailyEntryForm entries={this.state.entries} handleSubmit={this.handleSubmit}/>
        <JournalEntryList entries={this.state.entries}/>
      </div>
    )
  }
}
export default JournalContainer;
