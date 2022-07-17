import react from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

    const handleGoBack = (event) => {
        event.preventDefault();
        history.push('/');
    }

    return (
        <form onSubmit={handleUnderstandingSubmit}>
            <h2>How well are you understanding today's content?</h2>
            <Button 
            sx={{m: 2}}
            variant="outlined"
            onClick={handleGoBack}
            >GO BACK</Button>

            <TextField
                sx={{width: 100}}
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{shrink: true}}
                InputProps={{ inputProps: { min: 1, max: 5 } }}
                variant="filled"
                placeholder="1-5"
                value={newUnderstanding}
                min={1}
                max={5}
                onChange={(event) => setNewUnderstanding(event.target.value)}
            />
            <Button 
            sx={{m: 2}}
            variant="outlined"
            type="submit"
            disabled={ ( newUnderstanding.length === 0 ) ? true : false }
            >NEXT</Button>
            <h5>Please add a value from 1 to 5 before selecting 'NEXT'</h5>
        </form>
    )
}

export default understandingFunction;