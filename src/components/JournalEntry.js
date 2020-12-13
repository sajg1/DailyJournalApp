import React, {Component} from 'react';

class JournalEntry extends Component{
  render() {
    return(
      <div>
        <thead>
          <tr>
            <th>Date</th>
            <th>What I'm Grateful For</th>
            <th>What Would Make Today Great</th>
            <th>Daily Affirmation</th>
          </tr>
        </thead>
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
          <tr>
            <th></th>
            <td>{this.props.grateful3}</td>
            <td>{this.props.greatDay3}</td>
            <td></td>
          </tr>
        </tbody>
      </div>
    )
  }
}

export default JournalEntry;
