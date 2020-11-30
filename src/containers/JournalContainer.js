import React, {Component} from 'react';
import DailyEntryForm from '../components/DailyEntryForm';
import JournalEntryList from '../components/JournalEntryList';

class JournalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: ["first comment", "second comment", "third comment"]
    };

  };

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
