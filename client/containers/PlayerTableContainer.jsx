import React, { Component } from 'react';
import PlayerTableCreator from '../components/PlayerTableCreator.jsx';
import PlayerTableDisplay from '../components/PlayerTableDisplay.jsx';

const PlayerTableContainer = ({ scorecards }) => {
  return (
    <div className="playerTableContainer">
      {/* <h1>Player Table Container</h1> */}
      {/* <PlayerTableCreator /> */}
      <PlayerTableDisplay scorecards={scorecards} />
    </div>
  );
};

export default PlayerTableContainer;
