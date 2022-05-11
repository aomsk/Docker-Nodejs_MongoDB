const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>I'm inside docker</h1>");
});

app.get('/hello', (req, res) => {
    res.send("<h1>Hello World from AOMSK</h1>");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Express listening at http://0.0.0.0:${port}`);
})