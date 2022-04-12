import React, {useContext} from 'react';
import { AppContext } from '../App';

function Key({keyVal,disabled}) {
    const {onDelete,onEnter,onSelectLetter}=useContext(AppContext);
    function selectLetter(){
        if(keyVal==='ENTER'){
            onEnter();
        }else if(keyVal==='DEL'){
            onDelete();
        }else{
            onSelectLetter(keyVal);            
        }
    }
    return (
        <div className='key' onClick={selectLetter} id={disabled && 'disabled'}>
            {keyVal}
        </div>
    );
}

export default Key;