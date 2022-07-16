import react from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function commentsFunction () {

    const [newComments, setNewComments] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleCommentsSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_COMMENTS',
            payload: newComments
        });
        history.push('/feedback');
        // setNewComments('');
    }

    return (
        <form onSubmit={handleCommentsSubmit}>
            <h2>What additional comments do you have?</h2>
            <TextField
                // required
                sx={{width: 300}}
                // id="filled-required"
                label="Optional"
                // defaultValue="Comments"
                variant="filled"
                className="comments"
                type="text" 
                placeholder="Comments" 
                value={newComments}
                onChange={(event) => setNewComments(event.target.value)}
            />
        <Button 
        sx={{m: 2}}
        variant="outlined"
        type="submit">NEXT</Button>
        <h6>Optional to leave comments before selecting 'NEXT'</h6>
        </form>
    )
}

export default commentsFunction;