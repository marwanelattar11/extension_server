const express = require('express');
const app = express();
const port = 3000;

let extensionState = 'on'; // Initial state (can be 'on' or 'off')

// Endpoint to get the state
app.get('/extension-state', (req, res) => {
    res.send({ state: extensionState });
});

// Endpoint to toggle the state (for admin use)
app.post('/toggle-state', express.json(), (req, res) => {
    const { state } = req.body;
    if (state === 'on' || state === 'off') {
        extensionState = state;
        res.send({ status: 'success', newState: extensionState });
    } else {
        res.status(400).send({ status: 'error', message: 'Invalid state' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
