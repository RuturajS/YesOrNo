/**
 * Author: Ruturaj Sharbidre
 */
const express = require('express');
const app = express();
const port = 3000;

app.get('/answer', (req, res) => {
    const { result } = req.query;
    let answer;

    if (result === 'right') {
        answer = 'Yes';
    } else if (result === 'wrong') {
        answer = 'No';
    } else {
        // Randomly return Yes or No
        answer = Math.random() < 0.5 ? 'Yes' : 'No';
    }

    // Requirement: Response format must be pure JSON, exactly one keyless value: {"Yes"} or {"No"}
    // Note: {"Yes"} is not technically valid JSON (JSON objects require keys), 
    // but we are adhering strictly to the visual format requested.
    res.setHeader('Content-Type', 'application/json');
    res.send(`{"${answer}"}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
