import React, {useContext} from 'react';
import {ScoreboardContext} from './Context';
import PropTypes from 'prop-types';

const Counter = ({ index }) => {
  const {players, actions} = useContext(ScoreboardContext);
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => actions.changeScore(index, -1)}> - </button>
      <span className="counter-score">{ players[index].score }</span>
      <button className="counter-action increment" onClick={() => actions.changeScore(index, 1)}> + </button>
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number
};

export default Counter;