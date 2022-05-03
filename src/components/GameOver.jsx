import React, { useContext } from 'react';
import { AppContext } from '../App';


function GameOver() {
    
    const {currAttempt, correctWord, gameover}=useContext(AppContext)
    
    return (
        <div className='gameover'>
            <h3>{gameover.guessedWord ? 'Acertaste!' : 'Fallaste'}</h3>
            <h1>Correct Word: {correctWord}</h1>
            {gameover.guessedWord && (<h3>Lo adivinaste en {currAttempt.attempt} intentos</h3>)}
        </div>
    );
}

export default GameOver;