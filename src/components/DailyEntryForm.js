import React, {Component} from 'react';

class DailyEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      grateful: "",
      greatDay: "",
      affirmation: ""

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleGratefulChange = this.handleGratefulChange.bind(this);
    this.handleGreatDayChange = this.handleGreatDayChange.bind(this);
    this.handleAffirmationChange = this.handleAffirmationChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  };

  handleGratefulChange(event) {
    this.setState({
      grateful: event.target.value
    })
  };

  handleGreatDayChange(event) {
    this.setState({
      greatDay: event.target.value
    })
  }

  handleAffirmationChange(event) {
    this.setState({
      affirmation: event.target.value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const input = this.state.input.trim();
    if (!input) {
      return
    }
    this.props.handleSubmit({text: input});
    this.setState({input: ""})

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
          <div>
            <label htmlFor="great-day">What would make today great?</label>
            <br/>
            <textarea value={this.state.greatDay} onChange={this.handleGreatDayChange} id="great-day" name="great-day" placeholder="3 things that would make today great..."/>
          </div>
          <div>
            <label htmlFor="affirmation">Daily Affirmation</label>
            <br/>
            <textarea value={this.state.affirmation} onChange={this.handleAffirmationChange} id="affirmation" name="affirmation" placeholder="I am..."/>
          </div>
          <div>
            <input value={this.state.input} onChange={this.handleChange}></input>
            <input type="submit" value="Submit Entry"/>
          </div>
        </form>
      </div>
    )
  }
}
export default DailyEntryForm;
