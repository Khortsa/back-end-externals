const express = require('express');
const app = express();
const data = require('./data.json');

const link = require('axios');
const {response} = require('express');
const router = express.Router();



app.get('/game-of-thrones/json',(req, res) =>{
    res.json(data)
});

app.get('/game-of-thrones/url',(req, res) => {
  link.get('https://thronesapi.com/api/v2/Characters')
    .then(response =>{
        console.log('data', data)
        console.log('response.data', response.data)
        res.json({
            data: response.data
        })
    })
    .catch(err => console.log(err));
});

app.get('/pokemon/url', (req, res) =>{
    link.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then(response => {
        res.json({
            data: response.data
        })
    })
});


app.listen(3005, () => {
    console.log('port number 3005')
})