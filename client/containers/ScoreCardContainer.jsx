import React, { Component, useState } from 'react';
import ScoreCardCreator from '../components/ScoreCardCreator.jsx';
import ScoreCardDisplay from '../components/ScoreCardDisplay.jsx';

const ScoreCardContainer = ({ onScorecardCreated }) => {
  const [scorecard, setScorecard] = useState(null); // initializes scorecard state to null

  // if scorecard state
  return (
    <div className="scoreCardContainer">
      {/* <h1>Score Card Container</h1> */}
      <ScoreCardCreator setScorecard={setScorecard} />
      {scorecard ? (
        <ScoreCardDisplay
          onScorecardCreated={(newScorecard) => {
            setScorecard(null);
            onScorecardCreated(newScorecard);
          }}
          scorecard={scorecard}
        />
      ) : null}
    </div>
  );
};

export default ScoreCardContainer;
