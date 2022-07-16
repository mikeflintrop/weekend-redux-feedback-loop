import react from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
            <input 
                type="text" 
                placeholder="Comments" 
                value={newComments}
                onChange={(event) => setNewComments(event.target.value)}
            />
        <button type="submit">NEXT</button>
        </form>
    )
}

export default commentsFunction;