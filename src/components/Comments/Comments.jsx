import react from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
            <input 
                type="text" 
                placeholder="Comments" 
                value={newComments}
                onChange={(event) => setNewComments(event.target.value)}
            />
        <button type="submit">NEXT</button>
        <h6>Optional to leave comments before selecting 'NEXT'</h6>
        </form>
    )
}

export default commentsFunction;