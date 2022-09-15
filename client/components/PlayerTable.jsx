import React from 'react';
import ScoreCard from './ScoreCard.jsx';

const PlayerTable = ({scorecard}) => {
  return (
    <div className="playerTable">
    <div>
      <h1>{scorecard.course}</h1>
      <p>{scorecard.date}</p>
    </div>
    <div>
      <ScoreCard
        scorecard={scorecard}
        pars={scorecard.par}
        scores={scorecard.score}
        editable={false}
      />
    </div>
  </div>
  )
}

export default PlayerTable;