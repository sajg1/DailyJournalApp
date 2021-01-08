import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css';

const NavBar = () => (
    <div className="nav">
      <h2>DayJournal</h2>
      <ul>
        <li><Link className="text-link" to="/">Home</Link></li>
        <li><Link className="text-link" to="/dailyentry">Daily Entry</Link></li>
        <li><Link className="text-link" to="/goals"> Goals</Link></li>
        <li><Link className="text-link" to="/pastentries">Past Entries</Link></li>
      </ul>
    </div>
);

export default NavBar;
