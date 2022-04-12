import React, { useContext } from 'react';
import { AppContext } from '../App';


function GameOver() {
    
    const {currAttempt, correctWord, gameover}=useContext(AppContext)
    
    return (
        <div className='gameover'>
            <h3>{gameover.guessedWord ? 'You correctly guessed!' : 'You failed'}</h3>
            <h1>Correct Word: {correctWord}</h1>
            {gameover.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
        </div>
    );
}

export default GameOver;