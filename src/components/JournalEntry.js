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
          <td>{this.props.grateful1}</td>
          <td>{this.props.greatDay1}</td>
          <td>{this.props.affirmation}</td>
        </tr>
        <tr>
          <td></td>
          <td>{this.props.grateful2}</td>
          <td>{this.props.greatDay2}</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>{this.props.grateful3}</td>
          <td>{this.props.greatDay3}</td>
          <td></td>
        </tr>
      </tbody>
    )
  }
}

export default JournalEntry;
