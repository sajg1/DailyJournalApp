import React, {Component} from 'react';
import DailyEntryForm from '../components/DailyEntryForm';
import JournalEntryList from '../components/JournalEntryList';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import LongTermGoalTable from '../components/LongTermGoalTable';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class JournalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      goals: [
        {
          id: 1,
          description: "To commit two more times to github",
          timescale: "2 hours"
        },
        {
          id: 2,
          description: "Get my purple belt in JiuJitsu",
          timescale: "2 years"
        },
        {
          id: 3,
          description: "Get my brown belt in JiuJitsu",
          timescale: "3 years"
        },
        {
          id: 4,
          description: "Get my black belt in JiuJitsu",
          timescale: "5 years"
        }
      ],
      completedGoals: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCompletedGoalTransfer = this.handleCompletedGoalTransfer.bind(this);

  };

  handleSubmit(entrySubmitted) {
    entrySubmitted.id = Date.now();
    const updatedEntries = [...this.state.entries, entrySubmitted];
    this.setState({entries: updatedEntries});
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
          <Route exactpath="/" component={HomePage} />
          <Route
            path="/goals"
            render={(props) => (
              <LongTermGoalTable {...props} handleCompletedGoal= {this.handleCompletedGoalTransfer} goalList={this.state.goals} completedGoalsList={this.state.completedGoals} />
            )}
          />
          < Route
            path="/dailyentry"
            render={(props) => (
              <DailyEntryForm {...props} entries={this.state.entries} handleSubmit={this.handleSubmit}/>
            )}
          />
          <Route
            path="/pastentries"
            render={(props) => (
              <JournalEntryList {...props} entries={this.state.entries} />
            )}
          />
        </div>
      </ Router>
    )
  }
}
export default JournalContainer;
