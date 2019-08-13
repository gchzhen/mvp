const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('../database/helpers.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());


app.get('/api/images/', (req, res) => {
  const { id } = req.params;
  helpers.getImages()
    .then(urls => res.send(urls).end())
    .catch(err => console.log(err));
});


// app.get('/test', (req, res) => res.json('Hello from server, endpoint /test'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
