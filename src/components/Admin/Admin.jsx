import react from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function adminFunction () {

    // const feeling = useSelector(store => store.feelingReducer)
    // const understanding = useSelector(store => store.understandingReducer)
    // const support = useSelector(store => store.supportReducer)
    // const comments = useSelector(store => store.commentsReducer)
    const  feedbacks = useSelector(store=> store.feedbackReducer)

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {

        getFeedback();
    
    }, [] );

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
        .then((response) => {
        // response.data is the array of feedback
        console.log('success in GETting feedback', response.data);
        dispatch({
            type: 'GET_FEEDBACK', 
            payload: response.data
            })
        })
        .catch((error) => {
            console.log('error in GETting feedback', error);
            alert(error.message);
        });
    };

    const handleRemoveFeedback = (id) => {
        console.log( 'in handleRemoveFeedback', id);
        axios({
            method: 'DELETE',
            url: `/feedback/${id}`
        }).then((response) => {
        // console.log('success in DELETEing feedback', response );
            dispatch({
                type: 'REMOVE_FEEDBACK', 
                payload: response.data
            })
            getFeedback();
        }).catch((error) => {
            console.log('error in DELETEing feedback', error);
            alert(error.message);
        })
    };

    const handleGoBack = (event) => {
        event.preventDefault();
        history.push('/');
    }

    return (
        <div>
            <h2>ADMIN INFO</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>* Remove Feedback by clicking the 'Remove' Button
                        < br />
                        * Clicking the 'GO BACK' button will return you to the beginning of the feedback form
                    </caption>
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Feeling</TableCell>
                        <TableCell align="center">Understanding</TableCell>
                        <TableCell align="center">Support</TableCell>
                        <TableCell align="right">Comments</TableCell>
                        <TableCell align="center">Remove</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedbacks.map((feedback) => (
                        <TableRow key={feedback.id}>
                        <TableCell component="th" scope="row" align="center">
                            {feedback.id}
                        </TableCell>
                        <TableCell align="center">{feedback.feeling}</TableCell>
                        <TableCell align="center">{feedback.understanding}</TableCell>
                        <TableCell align="center">{feedback.support}</TableCell>
                        <TableCell align="right">{feedback.comments}</TableCell>
                        <TableCell align="center">            
                            <Button 
                            // sx={{m: 2}}
                            variant="outlined"
                            onClick={() => handleRemoveFeedback(feedback.id)}
                            >REMOVE</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>

            {/* <h2>Review Your Feedback</h2>
            <h4>Feeling: {feeling}</h4>
            <h4>Understanding: {understanding}</h4>
            <h4>Support: {support}</h4>
            <h4>Comments: {comments}</h4> */}

            <Button 
            sx={{m: 2}}
            variant="outlined"
            onClick={handleGoBack}
            >GO BACK</Button>

        </div>
    )
}

export default adminFunction;