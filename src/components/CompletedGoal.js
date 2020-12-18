import React, { Component } from 'react';

class CompletedGoal extends Component {

  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.description}</td>
          <td>{this.props.timescale}</td>
          <td></td>
        </tr>
      </tbody>
    )
  }

  }

export default CompletedGoal;
