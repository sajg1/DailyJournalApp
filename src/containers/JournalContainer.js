import React, {Component} from 'react';
import DailyEntryForm from '../components/DailyEntryForm';
import JournalEntryList from '../components/JournalEntryList';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import CurrentGoalTable from '../components/CurrentGoalTable';
import CompletedGoalTable from '../components/CompletedGoalTable';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class JournalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      goals: [],
      completedGoals: []
    };

    this.handleDailyEntrySubmit = this.handleDailyEntrySubmit.bind(this);
    this.handleGoalToSubmit = this.handleGoalToSubmit.bind(this);
    this.handleCompletedGoalTransfer = this.handleCompletedGoalTransfer.bind(this);

  };

  handleDailyEntrySubmit(entrySubmitted) {
    entrySubmitted.id = Date.now();
    const updatedEntries = [...this.state.entries, entrySubmitted];
    this.setState({entries: updatedEntries});
  }

  handleGoalToSubmit(goalSubmitted) {
    goalSubmitted.id = Date.now();
    const updatedGoals = [...this.state.goals, goalSubmitted];
    console.log("Goal Submitted: ", goalSubmitted)
    this.setState({goals: updatedGoals})
    console.log("Goals Array: ", this.state.goals)
  }

  handleCompletedGoalTransfer(selectedGoal) {
    const goals = [...this.state.goals];
    const completedGoals = [...this.state.completedGoals];
    const index = goals.indexOf(selectedGoal);
    console.log("index", index)
    const goalCompleted = goals.splice(index, 1);
    completedGoals.push(goalCompleted[0]);
    this.setState({
      goals: goals,
      completedGoals: completedGoals
    })
  }

  render() {
    return(
      <Router>
        <div className="container">
          <NavBar />
          <div className="main-display">
            <Route path="/" component={HomePage} />
            < Route
            path="/dailyentry"
            render={(props) => (
              <DailyEntryForm {...props} entries={this.state.entries} handleSubmit={this.handleDailyEntrySubmit}/>
            )}
            />
            <Route
              path="/goals"
              render={(props) => (
                <CurrentGoalTable {...props} handleGoalToSubmit={this.handleGoalToSubmit} handleCompletedGoal= {this.handleCompletedGoalTransfer} goalList={this.state.goals} completedGoalsList={this.state.completedGoals} />
              )}
            />
            <Route
              path="/goals"
              render={(props) => (
                <CompletedGoalTable {...props} completedGoalsList={this.state.completedGoals} />
              )}
            />
            <Route
              path="/pastentries"
              render={(props) => (
                <JournalEntryList {...props} entries={this.state.entries} />
              )}
            />
          </div>
        </div>
      </ Router>
    )
  }
}
export default JournalContainer;
