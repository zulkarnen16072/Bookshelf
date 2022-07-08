
const express = require('express');
const routesBook = require('./RoutesBook');
const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routesBook);

app.listen(5000, () => console.info(`listening on port 5000`))