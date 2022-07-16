const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// POST request
router.post('/',  (req, res) => {
    let feedback = req.body;
    console.log(`Adding feedback`, feedback);

    let queryText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedback])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log(`Error POSTing feedback: ${error}`, error);
        res.sendStatus(500);
    });
});

// GET request
router.get('/', (req, res) => {
    // GET feedback
    let queryText = `SELECT * FROM feedback`;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log(`Error GETting feedback:${error}`, error);
        res.sendStatus(500);
    });
});

module.exports = router;