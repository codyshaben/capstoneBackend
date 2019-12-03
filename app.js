const express = require('express');
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const users = require('./controllers/users')
const resorts = require('./controllers/resorts')
const bodyParser = require('body-parser');
const app = express();

const Knex = require('knex')
const objection = require('objection')
const Model = objection.Model
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')
const environmentConfig = config[environment]
const connection = Knex(environmentConfig)

Model.knex(connection)

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/users', users)
app.use('/users/:id', users)
app.use('/resorts', resorts)

// const PORT = process.env.PORT || 6000
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`)
// })

module.exports = app, connection
