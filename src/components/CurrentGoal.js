import React, { Component } from 'react';

class CurrentGoal extends Component {
  constructor(props) {
    super(props);

    this.handleCompletedGoal = this.handleCompletedGoal.bind(this);
  }

  handleCompletedGoal(event) {
    event.preventDefault();
    const goalList = [...this.props.goalList]
    const completedGoal = goalList.find(goal => goal.id === this.props.id)
    console.log("completedGoal: ", completedGoal);
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

export default CurrentGoal;
