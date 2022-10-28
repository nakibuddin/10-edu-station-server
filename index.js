const express = require('express');
const app = express();
// const port = process.env.PORT || 5000;
const port = 5000;

const cors = require('cors');
app.use(cors());

const mobiles = require('./data/mobiles.json');
const courses = require('./data/courses.json');
const quizzes = require('./data/quizzes.json');

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/mobiles', (req, res) => {
    res.send(mobiles);
})

app.get('/courses', (req, res) => {
    console.log('from all course', req.params);
    res.send(courses);
})

app.get('/course/:id', (req, res) => {    
    console.log('from course', req.params);  // output: {id: '4'}
    const id = parseInt(req.params.id);
    const course = courses.data.find(course => course.id === id);
    res.send(course);
    
})

app.get('/course/checkout/:id', (req, res) => {    
    console.log('from checkout', req.params);  // output: {id: '4'}
    const id = parseInt(req.params.id);
    const course = courses.data.find(course => course.id === id);
    res.send(course);

})

app.get('/course/quiz/:name', (req, res) =>{   
    // console.log('from quiz', req.params);
    const my_name = req.params.name.toLowerCase();        
    const quiz = quizzes.find(quiz => quiz.data.name.toLowerCase() === my_name);
    res.send(quiz);
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})