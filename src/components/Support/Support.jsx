import react from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function supportFunction () {

    const [newSupport, setNewSupport] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSupportSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_SUPPORT',
            payload: newSupport
        });
        history.push('/comments');
        // setNewSupport('');
    }

    return (
        <form onSubmit={handleSupportSubmit}>
            <h2>How supported do you feel with today's content?</h2>
            <TextField
                sx={{width: 100}}
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{shrink: true}}
                InputProps={{ inputProps: { min: 1, max: 5 } }}
                variant="filled"
                placeholder="1-5"
                value={newSupport}
                min={1}
                max={5}
                onChange={(event) => setNewSupport(event.target.value)}
            />
        <Button 
        sx={{m: 2}}
        variant="outlined"
        type="submit"
        disabled={ ( newSupport.length === 0 ) ? true : false }
        >NEXT</Button>
        <h6>Please add a value from 1 to 5 before selecting 'NEXT'</h6>
        </form>
    )
}

export default supportFunction;