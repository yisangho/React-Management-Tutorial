const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
            {
                'id': 1,
                'image': 'https://placeimg.com/64/64/1',
                'name': 'Sangho',
                'birthday': '19730714',
                'gender': 'male',
                'job': 'programmer'
            },
            {
                'id': 2,
                'image': 'https://placeimg.com/64/64/2',
                'name': 'Sunmi',
                'birthday': '19740101',
                'gender': 'female',
                'job': 'counselor'
            },
            {
                'id': 3,
                'image': 'https://placeimg.com/64/64/3',
                'name': 'Kanghui',
                'birthday': '20000223',
                'gender': 'male',
                'job': 'programmer'
            }
    ]);
});


app.listen(port, () => console.log(`Listening on port : ${port}`));