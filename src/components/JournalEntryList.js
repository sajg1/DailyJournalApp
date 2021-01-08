import React, {Component} from 'react';
import JournalEntry from './JournalEntry';
import '../style/JournalEntryListStyle.css';

class JournalEntryList extends Component {

  render() {
    const entriesNode =
      this.props.entries.map(entry => {
        return (
          <JournalEntry
            timeStamp={entry.timestamp}
            grateful1={entry.grateful[0]}
            grateful2={entry.grateful[1]}
            grateful3={entry.grateful[2]}
            greatDay1={entry.greatDay[0]}
            greatDay2={entry.greatDay[1]}
            greatDay3={entry.greatDay[2]}
            affirmation={entry.affirmation}
            key={entry.id}
          />
        )
      })

    let journalEntryListDisplay = "";
    if (this.props.entries.length === 0) {
      journalEntryListDisplay = <p style={{color:"white", backgroundColor:"#feaa00", padding: "30px"}}>--- No entries to display ---</p>
    } else {
      journalEntryListDisplay =
        <div>
          <table className="journalTable">
            <thead>
              <tr className="title-row">
                <th>Date</th>
                <th>What I'm Grateful For</th>
                <th>What Would Make Today Great</th>
                <th>Daily Affirmation</th>
              </tr>
            </thead>
            {entriesNode}
          </table>
        </div>
    }

    return(
      <div>
        {journalEntryListDisplay}
      </div>
    )
  }
}



export default JournalEntryList;
