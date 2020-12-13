import React, {Component} from 'react';

class DailyEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //grateful and greatDay should be an array of comments from individual inputs
      grateful: "",
      greatDay: ["","",""],
      affirmation: ""

    }
    this.handleGratefulChange = this.handleGratefulChange.bind(this);
    this.handleGreatDay1Change = this.handleGreatDay1Change.bind(this);
    this.handleGreatDay2Change = this.handleGreatDay2Change.bind(this);
    this.handleGreatDay3Change = this.handleGreatDay3Change.bind(this);
    this.handleAffirmationChange = this.handleAffirmationChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleGratefulChange(event) {
    this.setState({
      grateful: event.target.value
    })
  };

  handleGreatDay1Change(event) {
    const greatDay = [...this.state.greatDay]
    const greatDay1 = event.target.value
    greatDay[0] = greatDay1
    this.setState({
      greatDay: greatDay
    })
  }

  handleGreatDay2Change(event) {
    const greatDay = [...this.state.greatDay]
    const greatDay2 = event.target.value
    greatDay[1] = greatDay2
    this.setState({
      greatDay: greatDay
    })
  }

  handleGreatDay3Change(event) {
    const greatDay = [...this.state.greatDay]
    const greatDay3 = event.target.value
    greatDay[2] = greatDay3
    this.setState({
      greatDay: greatDay
    })
  }
//working on changing greatDay and grateful from a single string to an array of string.

  handleAffirmationChange(event) {
    this.setState({
      affirmation: event.target.value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    // update handleFormSubmit to include grateful, greatDay and affirmation
    const grateful = this.state.grateful;
    const greatDay = this.state.greatDay;
    const affirmation = this.state.affirmation.trim();
    const timestamp = (new Date(Date.now())).toDateString()
    if (!grateful || !greatDay || !affirmation) {
      return
    }
    // change
    this.props.handleSubmit({timestamp: timestamp, grateful: grateful, greatDay: greatDay, affirmation: affirmation });
    //change setState to replace input with  the above.
    this.setState({grateful: "", greatDay: ["","",""], affirmation: ""})

  }

  render() {
    return(
      <div>
        <form className="entry-form" onSubmit={this.handleFormSubmit}>
          <div>
            <label htmlFor="grateful">I am grateful for... </label>
            <br/>
            <textarea value={this.state.grateful} onChange={this.handleGratefulChange} id="grateful" name="grateful" placeholder="3 things you are grateful for..."></textarea>
          </div>
          <div className="great-day">
            <label htmlFor="great-day">What would make today great?</label>
            <br/>
              <input value={this.state.greatDay[0]} onChange={this.handleGreatDay1Change} id="great-day1" name="great-day1" placeholder="1..."/>
              <input value={this.state.greatDay[1]} onChange={this.handleGreatDay2Change} id="great-day2" name="great-day2" placeholder="2..."/>
              <input value={this.state.greatDay[2]} onChange={this.handleGreatDay3Change} id="great-day3" name="great-day3" placeholder="3..."/>
          </div>
          <div>
            <label htmlFor="affirmation">Daily Affirmation</label>
            <br/>
            <textarea value={this.state.affirmation} onChange={this.handleAffirmationChange} id="affirmation" name="affirmation" placeholder="I am..."/>
          </div>
          <div>
            <input type="submit" value="Submit Entry"/>
          </div>
        </form>
      </div>
    )
  }
}
export default DailyEntryForm;
