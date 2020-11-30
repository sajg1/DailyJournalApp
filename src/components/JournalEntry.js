import React, {Component} from 'react';

class JournalEntry extends Component{
  render() {
    return(
      <div>
        <li>{this.props.children}</li>
      </div>
    )
  }
}

export default JournalEntry;
