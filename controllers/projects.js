const express = require('express')
const { Project } = require('../models/project')


const router = express.Router()

router.get('/', async (req, res) => {
    const projects = await Project.query()
    res.json(projects)
  })

module.exports = router