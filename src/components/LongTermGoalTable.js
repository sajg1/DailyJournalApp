import React, { Component } from 'react';
import LongTermGoal from './LongTermGoal';
import '../style/LongTermGoalTableStyle.css';

class LongTermGoalTable extends Component {

  render() {
    const goalNode =
      this.props.goalList.map(goal => {
        return (
          <LongTermGoal
            description={goal.description}
            timescale={goal.timescale}
            id={goal.id}
            key={goal.id}
            handleCompletedGoal={this.props.handleCompletedGoal}
            goalList={this.props.goalList}
          />
        )
      })

    const completedGoalsNode =
      this.props.completedGoalsList.map(completedGoal => {
        return (
          <LongTermGoal
            description={completedGoal.description}
            timescale={completedGoal.timescale}
            id={completedGoal.id}
            key={completedGoal.id}
          />
        )
      })

    return (
      <div>
        <div className="goals">
          <h3>Current Goals</h3>
          <table className="goalTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>TimeScale</th>
                <th></th>
              </tr>
            </thead>
            {goalNode}
          </table>
        </div>
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

      </div>

    )
  }
}

export default LongTermGoalTable;
