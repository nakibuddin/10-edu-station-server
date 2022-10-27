const express = require('express');
const app = express();
// const port = process.env.PORT || 5000;
const port = 5000;

const cors = require('cors');
app.use(cors());

const mobiles = require('./data/mobiles.json');
const courses = require('./data/course topic.json');

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/mobiles', (req, res) => {
    res.send(mobiles);
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})