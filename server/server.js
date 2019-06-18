const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const famousPeopleRouter = require('./routes/famousPeople');)

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(morgan('dev'));

// routes
app.use('/famousPeople', famousPeopleRouter);

app.listen(3000, () => {
    console.log('app is listening on posrt 3000');
})