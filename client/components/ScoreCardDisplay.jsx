import React, { useState } from 'react';
import ScoreCard from './ScoreCard.jsx';

const initialHoles = Array.apply(null, Array(18)).map(() => 0); // create an array with length of 18 and elements all at 0

const ScoreCardDisplay = ({ scorecard, onScorecardCreated }) => {
  const [pars, setPars] = useState(initialHoles); // default state is initialHoles array
  const [scores, setScores] = useState(initialHoles); // default state is initialHoles array

  const onParChange = (e, idx) => {
    const newPars = Array.from(pars); //makes a brand new copy with a different reference in memory
    // console.log(e.target.value, idx); // console logs player
    newPars[idx] = parseInt(e.target.value); // e.target.value was a string
    // console.log('pars', pars);
    setPars(newPars); // sets new state onParChange
  };

  const onScoreChange = (e, idx) => {
    const newScores = Array.from(scores); //makes a brand new copy with a different reference in memory
    // console.log(e.target.value, idx); // console logs player
    newScores[idx] = parseInt(e.target.value); // e.target.value was a string
    // console.log('scores', scores);
    setScores(newScores); // sets new state onScoreChange
  };

  const handleSubmit = (event) => {
    fetch('http://localhost:8081/api/scorecard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      // mode: 'no-cors',
      body: JSON.stringify({ ...scorecard, score: scores, par: pars }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => onScorecardCreated(data))
      .catch((err) => console.log('error', err));
  };

  return (
    <div className="scoreCardDis">
      <div>
        <h1>{scorecard.course}</h1>
        <p>{scorecard.date}</p>
      </div>
      <div>
        <ScoreCard
          scorecard={scorecard}
          pars={pars}
          scores={scores}
          onParChange={onParChange}
          onScoreChange={onScoreChange}
        />
      </div>
      <div>
        <button
          type="button"
          className="scorecardSubmit"
          onClick={handleSubmit}
        >
          Submit Score Card
        </button>
      </div>
    </div>
  );
};

export default ScoreCardDisplay;
