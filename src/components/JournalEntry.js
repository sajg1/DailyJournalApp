import React, {Component} from 'react';
import '../style/JournalEntryListStyle.css';

class JournalEntry extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <th>{this.props.timeStamp}</th>
          <td>{this.props.grateful1}</td>
          <td>{this.props.greatDay1}</td>
          <td>{this.props.affirmation}</td>
        </tr>
        <tr>
          <th></th>
          <td>{this.props.grateful2}</td>
          <td>{this.props.greatDay2}</td>
          <td></td>
        </tr>
        <tr className="last-row">
          <th></th>
          <td>{this.props.grateful3}</td>
          <td>{this.props.greatDay3}</td>
          <td></td>
        </tr>
      </tbody>
    )
  }
}

export default JournalEntry;
