import react from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
        // setNewFeeling('');
    }

    return (
        <form onSubmit={handleUnderstandingSubmit}>
            <input 
                type="number" 
                placeholder="1-5"
                value={newUnderstanding}
                min={1}
                max={5}
                onChange={(event) => setNewUnderstanding(event.target.value)}
            />
        <button type="submit">NEXT</button>
        </form>
    )
}

export default understandingFunction;