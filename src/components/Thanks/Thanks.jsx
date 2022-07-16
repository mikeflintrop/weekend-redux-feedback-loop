import react from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function thanksFunction () {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleStartOver = () => {

        dispatch({
            type: 'ADD_FEELING',
            payload: ''
        });
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: ''
        });
        dispatch({
            type: 'ADD_SUPPORT',
            payload: ''
        });
        dispatch({
            type: 'ADD_COMMENTS',
            payload: ''
        });
        history.push('/');
    };

    return (
        <div>
            <h2>Thanks!</h2>
            <Button
            variant="outlined"
            onClick={handleStartOver}>Leave More Feedback!</Button>
        </div>
    )
};

export default thanksFunction;