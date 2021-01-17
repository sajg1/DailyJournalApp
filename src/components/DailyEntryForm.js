import React, {Component} from 'react';
import '../style/DailyEntryFormStyle.css';

class DailyEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //grateful and greatDay should be an array of comments from individual inputs
      grateful: ["","",""],
      greatDay: ["","",""],
      affirmation: "",
      displayMessage: false

    }
    this.handleGratefulChange = this.handleGratefulChange.bind(this);
    this.handleGreatDayChange = this.handleGreatDayChange.bind(this);
    this.handleGrateful1Change = this.handleGrateful1Change.bind(this);
    this.handleGrateful2Change = this.handleGrateful2Change.bind(this);
    this.handleGrateful3Change = this.handleGrateful3Change.bind(this);
    this.handleGreatDay1Change = this.handleGreatDay1Change.bind(this);
    this.handleGreatDay2Change = this.handleGreatDay2Change.bind(this);
    this.handleGreatDay3Change = this.handleGreatDay3Change.bind(this);
    this.handleAffirmationChange = this.handleAffirmationChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

// Generic functions to handle each input for GreatDay and Grateful.
  }
  handleGratefulChange(event, i) {
    const grateful = [...this.state.grateful]
    const gratefulInstance = event.target.value
    grateful[i] = gratefulInstance
    this.setState({
      grateful: grateful
    })
  }

  handleGreatDayChange(event, i) {
    const greatDay = [...this.state.greatDay]
    const greatDayInstance = event.target.value
    greatDay[i] = greatDayInstance
    this.setState({
      greatDay: greatDay
    })
  }
// Handle Grateful
  handleGrateful1Change(event) {
    this.handleGratefulChange(event, 0)
  };

  handleGrateful2Change(event) {
    this.handleGratefulChange(event, 1)
  };

  handleGrateful3Change(event) {
    this.handleGratefulChange(event, 2)
  };

//Handle GreatDay
  handleGreatDay1Change(event) {
    this.handleGreatDayChange(event,0)
  }

  handleGreatDay2Change(event) {
    this.handleGreatDayChange(event, 1)
  }

  handleGreatDay3Change(event) {
    this.handleGreatDayChange(event, 2)
  }

// Handle Affirmation
  handleAffirmationChange(event) {
    this.setState({
      affirmation: event.target.value
    })
  }

//Handle Submission of Form
  handleFormSubmit(event) {
    event.preventDefault();
    const grateful = this.state.grateful;
    const greatDay = this.state.greatDay;
    const affirmation = this.state.affirmation.trim();
      const timestamp = (new Date(Date.now())).toDateString()
    if (!grateful || !greatDay || !affirmation) {
      return
    }
    this.props.handleSubmit({timestamp: timestamp, grateful: grateful, greatDay: greatDay, affirmation: affirmation });
    this.setState({grateful: ["","",""], greatDay: ["","",""], affirmation: "", displayMessage: true})

  }

  render() {
    let display = "";
    if (this.state.displayMessage) {
      display = <p style={{color: "white", backgroundColor: "#feaa00", padding: "30px"}}>Congratulations, you have completed your daily entry! See you Tomorrow &#128077;</p>
    } else {
      display =
        <div className="form-container">
          <div className="form-title">
            <h1>Daily Journal Entry</h1>
            <p>The aim of this type of journal entry is for it to allow you to focus your day as soon as you wake up giving you purpose and drive. Watch Tim Ferris explain how he uses the journal <a className="non-nav-link" href="https://www.youtube.com/watch?v=glFMpyx_oU4" target="_blank">here</a>.</p>
          </div>
          <form className="entry-form" onSubmit={this.handleFormSubmit}>
            <h4>Please fill in your journal entry for today: </h4>
            <div className="row">
              <div className="col-25">
                <label htmlFor="grateful">What THREE things are you grateful for today? </label>
              </div>
              <div className="col-75">
                <div className="vert-input">
                  <input value={this.state.grateful[0]} onChange={this.handleGrateful1Change} id="grateful1" name="grateful1" placeholder="1..."/>
                  <input value={this.state.grateful[1]} onChange={this.handleGrateful2Change} id="grateful2" name="grateful2" placeholder="2..."/>
                  <input value={this.state.grateful[2]} onChange={this.handleGrateful3Change} id="grateful3" name="grateful3" placeholder="3..."/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="great-day">What THREE things would make today great?</label>
              </div>
              <div className="col-75">
                <div className="vert-input">
                  <input value={this.state.greatDay[0]} onChange={this.handleGreatDay1Change} id="great-day1" name="great-day1" placeholder="1..."/>
                  <input value={this.state.greatDay[1]} onChange={this.handleGreatDay2Change} id="great-day2" name="great-day2" placeholder="2..."/>
                  <input value={this.state.greatDay[2]} onChange={this.handleGreatDay3Change} id="great-day3" name="great-day3" placeholder="3..."/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="affirmation">What is your Affirmation for today?</label>
              </div>
              <div className="col-75">
                <textarea value={this.state.affirmation} onChange={this.handleAffirmationChange} id="affirmation" name="affirmation" placeholder="I am..."/>
              </div>
            </div>
            <div className="row">
              <input type="submit" value="Submit Entry"/>
            </div>
          </form>
        </div>
    }
    return(
      <div>{display}</div>
    )
  }
}
export default DailyEntryForm;
