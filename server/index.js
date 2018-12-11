const express = require('express');
const bodyParser = require('body-parser');
const port = 3010;

const app = express()
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server listening on port ${port}`))
