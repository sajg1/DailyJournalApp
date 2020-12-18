import React, { Component } from 'react';
import CompletedGoal from './CompletedGoal';
import '../style/LongTermGoalTableStyle.css';

class CompletedGoalTable extends Component {

  render() {

    const completedGoalsNode =
      this.props.completedGoalsList.map(completedGoal => {
        return (
          <CompletedGoal
            description={completedGoal.description}
            timescale={completedGoal.timescale}
            id={completedGoal.id}
            key={completedGoal.id}
          />
        )
      })

    return (
      <div className="completedGoals">
        <h3>Completed Goal</h3>
        <table className="completedGoalsTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>TimeScale</th>
              <th></th>
            </tr>
          </thead>
          {completedGoalsNode}
        </table>
      </div>
    )
  }
}

export default CompletedGoalTable;
