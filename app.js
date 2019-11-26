const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Model } = require('objection')
const users = require('./controllers/users')
const projects = require('./controllers/projects')
const app = express();

const environment = process.env.NODE_ENV || 'development'
const knexConfig = require('./knexfile')
const environmentConfig = knexConfig[environment]
const Knex = require('knex')

const knex = Knex(environmentConfig)

Model.knex(knex)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors())
app.use('/users', users)
app.use('/users/:id', users)
app.use('/projects', projects)

const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = app;
