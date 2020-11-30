import React, {Component} from 'react';
import JournalEntry from './JournalEntry';

class JournalEntryList extends Component {

  render() {
    const entriesNode =
      this.props.entries.map(entry => {
        return (
          <JournalEntry >{entry}</JournalEntry>
        )
      })
    return(
      <div>
        <h3>This is a JournalEntryList</h3>
        <ul>
          {entriesNode}
        </ul>
      </div>
    )
  }
}

export default JournalEntryList;
