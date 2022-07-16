import react from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function feelingFunction () {

    const [newFeeling, setNewFeeling] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleFeelingSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_FEELING',
            payload: newFeeling
        });
        history.push('/understanding');
        // setNewFeeling('');
    }

    return (
        <form onSubmit={handleFeelingSubmit}>
            <h2>How are you feeling today?</h2>
            <input 
                type="number" 
                placeholder="1-5"
                value={newFeeling}
                min={1}
                max={5}
                onChange={(event) => setNewFeeling(event.target.value)}
            />
        <button type="submit">NEXT</button>
        </form>
    )
}

export default feelingFunction;