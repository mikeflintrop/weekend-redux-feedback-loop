import react from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
            <TextField
                sx={{width: 100}}
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{shrink: true}}
                InputProps={{ inputProps: { min: 1, max: 5 } }}
                variant="filled"
                placeholder="1-5"
                value={newFeeling}
                min={1}
                max={5}
                onChange={(event) => setNewFeeling(event.target.value)}
            />
            <Button 
            sx={{m: 2}}
            variant="outlined"
            type="submit"
            disabled={ ( newFeeling.length === 0 ) ? true : false }
            >NEXT</Button>
            <h5>Please add a value from 1 to 5 before selecting 'NEXT'</h5>
        </form>
    )
}

export default feelingFunction;