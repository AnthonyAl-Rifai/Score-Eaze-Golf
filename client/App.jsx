import React from 'react'; //You don't need these react imports with functional components??
import MainContainer from './containers/MainContainer.jsx';
import './styles.css';

const App = () => {
  console.log('App rendering');
  return (
    <div className="app">
      <MainContainer />
    </div>
  );
};

export default App;
