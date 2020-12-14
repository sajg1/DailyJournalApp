import React, { Component } from 'react';

class LongTermGoal extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.description}</td>
          <td>{this.props.timescale}</td>
        </tr>
      </tbody>
    )
  }

  }

export default LongTermGoal;
