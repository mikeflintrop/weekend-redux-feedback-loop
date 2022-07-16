import react from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
            <button onClick={handleStartOver}>Leave More Feedback!</button>
        </div>
    )
};

export default thanksFunction;