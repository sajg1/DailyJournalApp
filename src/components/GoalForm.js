import React, { Component } from 'react';

class GoalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      goalDescription: '',
      timescale: '',
      completionDate: ''

    }

    this.handleGoalSubmit = this.handleGoalSubmit.bind(this);
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleTimeScaleChange = this.handleTimeScaleChange.bind(this);
  }

  handleGoalChange(event) {
    this.setState({
      goalDescription: event.target.value
    })
  }

  handleTimeScaleChange(event) {
    this.setState({
      timescale: event.target.value
    })
  }

  handleGoalSubmit(event) {
    event.preventDefault();
    const startDate = (new Date(Date.now())).toDateString();
    const goalDescription = this.state.goalDescription;
    console.log("Goal: ", goalDescription)
    const timescale = this.state.timescale;
    if (!goalDescription || !timescale) {
      return
    }
    this.props.handleGoalToSubmit({startDate: startDate, goalDescription: goalDescription, timescale: timescale})
    this.setState({
      startDate: '',
      goalDescription: '',
      timescale: '',
      completionDate: ''
    })


  }
  render() {
    return(
      <div className="goalForm">
        <form onSubmit={this.handleGoalSubmit}>
          <label htmlFor="goal-description">What is your goal : </label>
          <input value={this.state.goalDescription} onChange={this.handleGoalChange} id="goal-description" placeholder="Describe your goal..."></input>
          <label htmlFor="timescale">Timescale to complete this goal : </label>
          <input value={this.state.timescale} onChange={this.handleTimeScaleChange} id="timescale" placeholder="Enter timescale here..."></input>
          <input type="submit" value="Set your Goal"></input>
        </form>
      </div>
    );
  }
}

export default GoalForm;
