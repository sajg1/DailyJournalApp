import React, {Component} from 'react';

class JournalEntry extends Component{
  render() {
    return(
      <div classname="journal-entry">
        <tr>
          <th>Date</th>
          <th>What I'm Grateful For</th>
          <th>What would make Today Great!</th>
          <th>Daily Affirmation</th>
        </tr>
        <tr>
          <td>{this.props.timeStamp}</td>
          <td>{this.props.grateful}</td>
          <td>{this.props.greatDay}</td>
          <td>{this.props.affirmation}</td>
        </tr>
      </div>
    )
  }
}

export default JournalEntry;
