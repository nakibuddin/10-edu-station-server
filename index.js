const express = require('express');
const app = express();
// const port = process.env.PORT || 5000;
const port = 5000;

const cors = require('cors');
app.use(cors());

const mobiles = require('./data/mobiles.json');

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/mobiles', (req, res) => {
    res.send(mobiles);
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})