import react from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function feedbackFunction () {

    const feeling = useSelector(store => store.feelingReducer)
    const understanding = useSelector(store => store.understandingReducer)
    const support = useSelector(store => store.supportReducer)
    const comments = useSelector(store => store.commentsReducer)

    const dispatch = useDispatch();
    const history = useHistory();

    const handleFeedbackSubmit = () => {
        // event.preventDefault();

        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling, 
                understanding: understanding, 
                support: support, 
                comments: comments
            }
        }).then((response) => {
            console.log( 'POST succeeded', response)
        }).catch((error) => {
            console.log('Post failed', error);
        });
        history.push('/thanks');
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <h4>Feeling: {feeling}</h4>
            <h4>Understanding: {understanding}</h4>
            <h4>Support: {support}</h4>
            <h4>Comments: {comments}</h4>
            <Button 
            variant="outlined"
            onClick={handleFeedbackSubmit}>SUBMIT</Button>
        </div>
    )
}

export default feedbackFunction;