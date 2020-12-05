import React, {Component} from 'react';

class DailyEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  };

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
            <label for="grateful">I am grateful for... </label>
            <br/>
            <textarea name="grateful" placeholder="3 things you are grateful for..."/>
          </div>
          <div>
            <label for="great-day">What would make today great?</label>
            <br/>
            <textarea name="great-day" placeholder="3 things that would make today great..."/>
          </div>
          <div>
            <label for="affirmation">Daily Affirmation</label>
            <br/>
            <textarea name="affirmation" placeholder="I am..."/>
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
