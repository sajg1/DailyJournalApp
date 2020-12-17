import React, { Component } from 'react';

class LongTermGoal extends Component {
  constructor(props) {
    super(props);

    this.handleCompletedGoal = this.handleCompletedGoal.bind(this);
  }

  handleCompletedGoal(event) {
    event.preventDefault();
    const id = this.props.id;
    const description = this.props.description;
    const timescale = this.props.timescale;
    this.props.handleCompletedGoal({id:id, description: description, timescale: timescale});
  }
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.description}</td>
          <td>{this.props.timescale}</td>
          <td><input type="button" value="Goal Completed &#10004;" onClick={this.props.handleCompletedGoal}/></td>
        </tr>
      </tbody>
    )
  }

  }

export default LongTermGoal;
