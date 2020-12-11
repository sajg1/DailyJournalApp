import React, {Component} from 'react';
import DailyEntryForm from '../components/DailyEntryForm';
import JournalEntryList from '../components/JournalEntryList';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class JournalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  };

  handleSubmit(entrySubmitted) {
    entrySubmitted.id = Date.now();
    const updatedEntries = [...this.state.entries, entrySubmitted];
    this.setState({entries: updatedEntries});
  }

  render() {
    return(
      <Router>
        <div>
          <NavBar />
          <Route exactpath="/" component={HomePage} />
          < Route
            path="/dailyentry"
            render={(props) => (
              <DailyEntryForm {...props} entries={this.state.entries} handleSubmit={this.handleSubmit}/>
            )}
          />
          <Route
            path="/pastentries"
            render={(props) => (
              <JournalEntryList {...props} entries={this.state.entries} />
            )}
          />
        </div>
      </ Router>
    )
  }
}
export default JournalContainer;
