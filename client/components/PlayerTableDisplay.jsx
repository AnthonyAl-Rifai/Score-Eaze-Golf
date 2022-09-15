import React from 'react';
import PlayerTable from './PlayerTable.jsx';

const PlayerTableDisplay = ({ scorecards }) => {
  return (
    <div className="playerTableDis">
      {/* <h1>Player Table Display</h1> */}
      {scorecards.map((el, idx) => {
        return <PlayerTable scorecard={el} key={idx} />;
      })}
    </div>
  );
};
export default PlayerTableDisplay;
