const express = require('express');
const bodyParser = require('body-parser');
const port = 3020;

const app = express()
app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );

app.listen(port, () => console.log(`Server listening on port ${port}`))
