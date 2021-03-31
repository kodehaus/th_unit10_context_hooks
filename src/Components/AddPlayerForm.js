import React, { useRef, useContext } from 'react';
import {ScoreboardContext} from './Context';

const AddPlayerForm = () => {
  const playerInput = useRef();
  const {players, actions} = useContext(ScoreboardContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('added player' + playerInput.current.value);
    actions.addPlayer(playerInput.current.value);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} >
      <input 
        type="text"
        ref={playerInput}
        placeholder="Enter a player's name"
      />            
      <input 
        type="submit"
        value="Add Player"
      />
    </form>
  );
}

export default AddPlayerForm;