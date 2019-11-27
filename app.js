const express = require('express');
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const users = require('./controllers/users')
const projects = require('./controllers/projects')
const bodyParser = require('body-parser');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/users', users)
app.use('/users/:id', users)
app.use('/projects', projects)

// const PORT = process.env.PORT || 6000
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`)
// })

module.exports = app;
