import React, { Component } from 'react';

class CompletedGoal extends Component {

  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.startDate}</td>
          <td>{this.props.goalDescription}</td>
          <td>{this.props.timescale}</td>
          <td>{this.props.completionDate}</td>
        </tr>
      </tbody>
    )
  }

  }

export default CompletedGoal;
