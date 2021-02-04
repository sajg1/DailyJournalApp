import React from 'react';

const HomePage = (props) => {
  return(
    <div className="home">
      <h1>Welcome To DayJournal</h1>
      <div className="intro-vid">
        <iframe width="600" height="315" style={{border:"none"}} title="Journal Intro" src="https://www.youtube.com/embed/RsDC3R24XOM?autoplay=1&mute=1"></iframe>
      </div>
    </div>
  );
}
export default HomePage;
