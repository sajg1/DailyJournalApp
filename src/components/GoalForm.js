import React, { Component } from 'react';
import '../style/GoalFormStyle.css';

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
      <div className="goal-form">
        <h4>Enter your Goals below to keep track of your progress: </h4>
        <form onSubmit={this.handleGoalSubmit}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="goal-description">What is your goal : </label>
            </div>
            <div className="col-75">
              <input value={this.state.goalDescription} type="text" onChange={this.handleGoalChange} id="goal-description"></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="timescale">Timescale to complete this goal : </label>
            </div>
            <div className="col-75">
            <input value={this.state.timescale} type="text" onChange={this.handleTimeScaleChange} id="timescale"></input>
            </div>
          </div>
          <div className="row">
            <input className="pretty-button" type="submit" value="Set your Goal"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default GoalForm;
