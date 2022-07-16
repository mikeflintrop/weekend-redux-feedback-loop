import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers
const feelingReducer = (state = 0, action) => {
    console.log('Feeling reducer: ', action)
    switch (action.type) {
        case 'ADD_FEELING':
        console.log('You clicked ADD_FEELING', action.payload);
        return action.payload;
        default: 
        // if action.type is anything else, return last value of state
        return state;
    }
}

const understandingReducer = (state = 0, action) => {
    console.log('Understanding reducer: ', action)
    switch (action.type) {
        case 'ADD_UNDERSTANDING':
        console.log('You clicked ADD_UNDERSTANDING', action.payload);
        return action.payload;
        default: 
        // if action.type is anything else, return last value of state
        return state;
    }
}

const supportReducer = (state = 0, action) => {
    console.log('Support reducer: ', action)
    switch (action.type) {
        case 'ADD_SUPPORT':
        console.log('You clicked ADD_SUPPORT', action.payload);
        return action.payload;
        default: 
        // if action.type is anything else, return last value of state
        return state;
    }
}

const commentsReducer = (state = 0, action) => {
    console.log('Comments reducer: ', action)
    switch (action.type) {
        case 'ADD_COMMENTS':
        console.log('You clicked ADD_COMMENTS', action.payload);
        return action.payload;
        default: 
        // if action.type is anything else, return last value of state
        return state;
    }
}

const feedbackReducer = (state = 0, action) => {
    console.log('Feedback reducer: ', action)
    switch (action.type) {
        case 'ADD_FEEDBACK':
        console.log('You clicked ADD_FEEDBACK', action.payload);
        return action.payload;
        default: 
        // if action.type is anything else, return last value of state
        return state;
    }
}

// Sore
const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
        feedbackReducer
    }),
    applyMiddleware(logger)
);

// Provider
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();