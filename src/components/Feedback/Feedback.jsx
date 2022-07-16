import react from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function feedbackFunction () {

    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const support = useSelector(store => store.support)
    const comments = useSelector(store => store.comments)

    const dispatch = useDispatch();
    const history = useHistory();

    const handleFeedbackSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_FEEDBACK',
            payload: {feeling, understanding, support, comments}
        });
        history.push('/thanks');
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <table>
                <thead>

                </thead>
                <tbody>

                </tbody>
            </table>
            <button onClick={(event) => handleFeedbackSubmit}>SUBMIT</button>
        </div>
    )
}

export default feedbackFunction;