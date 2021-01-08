import React, { Component } from 'react';
import CompletedGoal from './CompletedGoal';
import '../style/LongTermGoalTableStyle.css';

class CompletedGoalTable extends Component {

  render() {
    const completedGoalsNode =
    this.props.completedGoalsList.map(completedGoal => {
      return (
        <CompletedGoal
        goalDescription={completedGoal.goalDescription}
        timescale={completedGoal.timescale}
        startDate={completedGoal.startDate}
        completionDate={completedGoal.completionDate}
        id={completedGoal.id}
        key={completedGoal.id}
        />
      )
    })
    
    let completedGoalTableDisplay = '';
    if (this.props.completedGoalsList.length === 0) {
      completedGoalTableDisplay = <p style={{color: "white", backgroundColor: "red"}}>--- No completed goals to display ---</p>
    } else {
      completedGoalTableDisplay =
        <div className="completedGoals">
          <h3>Completed Goals</h3>
          <table className="completedGoalsTable">
            <thead>
              <tr>
                <th>Start Date</th>
                <th>Description</th>
                <th>TimeScale</th>
                <th>Completion Date</th>
              </tr>
            </thead>
            {completedGoalsNode}
          </table>
        </div>

    }


    return (
      <div>
        {completedGoalTableDisplay}
      </div>
    )
  }
}

export default CompletedGoalTable;
