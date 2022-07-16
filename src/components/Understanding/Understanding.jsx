import react from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function understandingFunction () {

    const [newUnderstanding, setNewUnderstanding] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleUnderstandingSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: newUnderstanding
        });
        history.push('/support');
        // setNewUnderstanding('');
    }

    return (
        <form onSubmit={handleUnderstandingSubmit}>
            <h2>How well are you understanding today's content?</h2>
            <input 
                type="number" 
                placeholder="1-5"
                value={newUnderstanding}
                min={1}
                max={5}
                onChange={(event) => setNewUnderstanding(event.target.value)}
            />
        <Button 
        variant="outlined"
        type="submit"
        disabled={ ( newUnderstanding.length === 0 ) ? true : false }
        >NEXT</Button>
        <h6>Please add a value from 1 to 5 before selecting 'NEXT'</h6>
        </form>
    )
}

export default understandingFunction;