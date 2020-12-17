import React, {Component} from 'react';

class DailyEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //grateful and greatDay should be an array of comments from individual inputs
      grateful: ["","",""],
      greatDay: ["","",""],
      affirmation: ""

    }
    this.handleGrateful1Change = this.handleGrateful1Change.bind(this);
    this.handleGrateful2Change = this.handleGrateful2Change.bind(this);
    this.handleGrateful3Change = this.handleGrateful3Change.bind(this);
    this.handleGreatDay1Change = this.handleGreatDay1Change.bind(this);
    this.handleGreatDay2Change = this.handleGreatDay2Change.bind(this);
    this.handleGreatDay3Change = this.handleGreatDay3Change.bind(this);
    this.handleAffirmationChange = this.handleAffirmationChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleGrateful1Change(event) {
    const grateful = [...this.state.grateful]
    const grateful1 = event.target.value
    grateful[0] = grateful1
    this.setState({
      grateful: grateful
    })
  };

  handleGrateful2Change(event) {
    const grateful = [...this.state.grateful]
    const grateful2 = event.target.value
    grateful[1] = grateful2
    this.setState({
      grateful: grateful
    })
  };

  handleGrateful3Change(event) {
    const grateful = [...this.state.grateful]
    const grateful3 = event.target.value
    grateful[2] = grateful3
    this.setState({
      grateful: grateful
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
    this.setState({grateful: ["","",""], greatDay: ["","",""], affirmation: ""})

  }

  render() {
    return(
      <div>
        <form className="entry-form" onSubmit={this.handleFormSubmit}>
          <div>
            <label htmlFor="grateful">I am grateful for... </label>
            <br/>
            <input value={this.state.grateful[0]} onChange={this.handleGrateful1Change} id="grateful1" name="grateful1" placeholder="1..."/>
            <input value={this.state.grateful[1]} onChange={this.handleGrateful2Change} id="grateful2" name="grateful2" placeholder="2..."/>
            <input value={this.state.grateful[2]} onChange={this.handleGrateful3Change} id="grateful3" name="grateful3" placeholder="3..."/>
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
