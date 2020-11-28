import React, {Component} from 'react';

class DailyEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return(
      <div>
        <form className="entry-form">
          <input value={this.state.input} onChange={this.handleChange}></input>
        </form>
      </div>
    )
  }
}
export default DailyEntryForm;
