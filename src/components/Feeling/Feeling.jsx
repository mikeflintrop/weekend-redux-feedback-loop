import react from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

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
        <Button 
        variant="outlined"
        type="submit"
        disabled={ ( newFeeling.length === 0 ) ? true : false }
        >NEXT</Button>
        <h6>Please add a value from 1 to 5 before selecting 'NEXT'</h6>
        </form>
    )
}

export default feelingFunction;