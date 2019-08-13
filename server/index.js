const express = require('express')
const bodyParser = require('body-parser');
const db = require('../database')

const app = express()
const port = 3000

app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors());

app.get('/test', (req, res) => res.json('Hello from server, endpoint /test'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));