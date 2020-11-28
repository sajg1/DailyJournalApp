import React, {Component} from 'react';
import JournalEntry from './JournalEntry';

class JournalEntryList extends Component {
  render() {
    return(
      <div>
        <h3>This is a JournalEntryList</h3>
        <JournalEntry />
      </div>
    )
  }
}

export default JournalEntryList;
