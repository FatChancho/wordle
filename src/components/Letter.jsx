import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ LetterPos, attemptVal }) {
  const { board, correctWord, currAttempt, setDisabledLetters } = useContext(AppContext);
  const letter = board[attemptVal][LetterPos];
  const correct = correctWord.toUpperCase()[LetterPos] === letter;
  const almost = correctWord.toUpperCase().includes(letter);
 
  
  let letterState = currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");
    

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
