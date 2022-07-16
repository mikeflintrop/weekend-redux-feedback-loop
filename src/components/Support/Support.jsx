import react from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
            <input 
                type="number" 
                placeholder="1-5"
                value={newSupport}
                min={1}
                max={5}
                onChange={(event) => setNewSupport(event.target.value)}
            />
        <button type="submit">NEXT</button>
        </form>
    )
}

export default supportFunction;