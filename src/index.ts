import express from 'express';
import { add, multiply, subtract } from './math';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/add-function', (req, res) => {
    res.send(add(2, 3).toString());
});

app.get('/subtract-function', (req, res) => {
    res.send(subtract(5, 3).toString());
});

app.get('/multiply-function', (req, res) => {
    res.send(multiply(4, 2).toString());
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});