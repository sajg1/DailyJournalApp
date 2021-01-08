import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <ul style={{ listStyleType:"none" }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dailyentry">Daily Entry</Link></li>
      <li><Link to="/goals"> Goals</Link></li>
      <li><Link to="/pastentries">Past Entries</Link></li>
    </ul>
);

export default NavBar;
