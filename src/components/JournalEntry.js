import React, {Component} from 'react';

class JournalEntry extends Component{
  render() {
    return(
      <tbody>
        <tr>
          <th>Date</th>
          <th>What I'm Grateful For</th>
          <th>What Would Make Today Great</th>
          <th>Daily Affirmation</th>
        </tr>
        <tr>
          <td>{this.props.timeStamp}</td>
          <td>{this.props.grateful}</td>
          <td>{this.props.greatDay1}</td>
          <td>{this.props.affirmation}</td>
        </tr>
      </tbody>
    )
  }
}

export default JournalEntry;
