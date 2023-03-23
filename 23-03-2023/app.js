const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes')
const path = require('path')

const app = express();


app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())


app.use('/user', router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`))
