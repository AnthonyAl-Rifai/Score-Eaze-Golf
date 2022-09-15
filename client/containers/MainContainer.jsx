import React, { Component, useEffect, useState } from 'react';
import ScoreCardContainer from './ScoreCardContainer.jsx';
import PlayerTableContainer from './PlayerTableContainer.jsx';

const MainContainer = () => {
  console.log('maincontainer rendering');
  const [scorecards, setScorecards] = useState(null);

  const onScorecardCreated = (scorecard) => {
    setScorecards([scorecard, ...scorecards]);
  };

  useEffect(() => {
    fetch('http://localhost:8081/api/scorecard')
      .then((res) => res.json())
      .then((data) => setScorecards(data));
  }, []);

  return (
    <div className="main">
      <h1 id="header">Score-Eaze Golf </h1>
      <ScoreCardContainer onScorecardCreated={onScorecardCreated} />
      {scorecards && scorecards.length ? <PlayerTableContainer scorecards={scorecards} /> : null}
    </div>
  );
};

export default MainContainer;
