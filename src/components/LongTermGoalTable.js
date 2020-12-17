import React, { Component } from 'react';
import LongTermGoal from './LongTermGoal';
import '../style/LongTermGoalTableStyle.css';

class LongTermGoalTable extends Component {

  render() {
    const goalNode =
      this.props.goalList.map(goal => {
        return (
          <LongTermGoal
            id={goal.id}
            description={goal.description}
            timescale={goal.timescale}
            key={goal.id}
            handleCompletedGoal={this.props.handleCompletedGoal}
          />
        )
      })

    return (
      <div>
        <div className="goals">
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

        </div>

      </div>

    )
  }
}

export default LongTermGoalTable;
