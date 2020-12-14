import React, { Component } from 'react';
import LongTermGoal from './LongTermGoal';

class LongTermGoalTable extends Component {

  render() {
    const goalNode =
      this.props.goalList.map(goal => {
        return (
          <LongTermGoal
            description={goal.description}
            timescale={goal.timescale}
            key={goal.id}
          />
        )
      })
      
    return (
      <div>
        <table className="goalTable">
          <thead>
            <tr>
              <th>Description</th>
              <th>TimeScale</th>
            </tr>
          </thead>
          {goalNode}
        </table>
      </div>

    )
  }
}

export default LongTermGoalTable;
