import React, { Component } from 'react';

class LongTermGoal extends Component {
  constructor(props) {
    super(props);

    this.handleCompletedGoal = this.handleCompletedGoal.bind(this);
  }

  handleCompletedGoal(event) {
    event.preventDefault();
    const completedGoal = this.props.goalList[this.props.id-1];
    console.log("CompletedGoal :", completedGoal);
    this.props.handleCompletedGoal(completedGoal);
  }
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.description}</td>
          <td>{this.props.timescale}</td>
          <td><input type="button" value="Goal Completed &#10004;" onClick={this.handleCompletedGoal}/></td>
        </tr>
      </tbody>
    )
  }

  }

export default LongTermGoal;
