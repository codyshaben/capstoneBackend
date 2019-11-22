const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Knex = require('knex')
const { Model } = require('objection')
const knexConfig = require('./knexfile')
const users = require('./controllers/users')
const projects = require('./controllers/projects')
const app = express();

const knex = Knex(knexConfig.development)

Model.knex(knex)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors())
app.use('/users', users)
app.use('/users/:id', users)
app.use('/projects', projects)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = app;
