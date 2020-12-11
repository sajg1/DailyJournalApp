import React, {Component} from 'react';
import JournalEntry from './JournalEntry';

class JournalEntryList extends Component {

  render() {
    const entriesNode =
      this.props.entries.map(entry => {
        return (
          <JournalEntry timeStamp={entry.timestamp} grateful={entry.grateful} greatDay1={entry.greatDay[0]} affirmation={entry.affirmation} key={entry.id} ></JournalEntry>
        )
      })
    return(
      <div>
        <h3>This is a JournalEntryTable</h3>
        <table>
          {entriesNode}
        </table>
      </div>
    )
  }
}

export default JournalEntryList;
