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
          <input value={this.state.input} onChange={this.handleChange}></input>
          <input type="submit" value="Submit Entry"/>
        </form>
      </div>
    )
  }
}
export default DailyEntryForm;
