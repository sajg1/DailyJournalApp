import React, {Component} from 'react';
import DailyEntryForm from '../components/DailyEntryForm';
import JournalEntryList from '../components/JournalEntryList';

class JournalContainer extends Component {
  render() {
    return(
      <div>
        <h2>Journal Container</h2>
        <DailyEntryForm />
        <JournalEntryList />
      </div>
    )
  }
}
export default JournalContainer;
