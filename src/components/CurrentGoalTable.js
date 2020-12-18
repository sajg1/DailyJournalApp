import React, { Component } from 'react';
import CurrentGoal from './CurrentGoal';
import GoalForm from './GoalForm';
import '../style/LongTermGoalTableStyle.css';

class CurrentGoalTable extends Component {

  render() {
    const goalNode =
      this.props.goalList.map(goal => {
        return (
          <CurrentGoal
            goalDescription={goal.goalDescription}
            id={goal.id}
            timescale={goal.timescale}
            startDate={goal.startDate}
            key={goal.id}
            handleCompletedGoal={this.props.handleCompletedGoal}
            goalList={this.props.goalList}
          />
        )
      })

    // const completedGoalsNode =
    //   this.props.completedGoalsList.map(completedGoal => {
    //     return (
    //       <CurrentGoal
    //         description={completedGoal.description}
    //         timescale={completedGoal.timescale}
    //         id={completedGoal.id}
    //         key={completedGoal.id}
    //       />
    //     )
    //   })

    return (
      <div>
        <GoalForm handleGoalToSubmit={this.props.handleGoalToSubmit}/>
        <div className="goals">
          <h3>Current Goals</h3>
          <table className="goalTable">
            <thead>
              <tr>
                <th>Start Date</th>
                <th>Description</th>
                <th>TimeScale</th>
                <th></th>
              </tr>
            </thead>
            {goalNode}
          </table>
        </div>
      </div>

    )
  }
}

export default CurrentGoalTable;