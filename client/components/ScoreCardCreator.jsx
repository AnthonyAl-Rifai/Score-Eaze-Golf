import React from 'react';

const ScoreCardCreator = ({ setScorecard }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevents rendering
    // console.log(event); // prints whole event object
    // console.log(event.target[0].value); // prints Player
    // console.log(event.target[1].value); // prints Date
    // console.log(event.target[2].value); // prints Course Name
    setScorecard({
      player: event.target[0].value,
      date: event.target[1].value,
      course: event.target[2].value,
    });
  };

  return (
    <div className="scoreCardCreator">
      <h1>Score Card Creator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Player:</label>
          <input name="name" />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input name="date" />
        </div>
        <div>
          <label htmlFor="course">Course Name:</label>
          <input name="course" />
        </div>
        <input type="submit" value="Create Score Card" />
      </form>
    </div>
  );
};

export default ScoreCardCreator;
