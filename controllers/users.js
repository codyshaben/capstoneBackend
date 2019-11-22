const express = require('express')
const { User } = require('../models/user')
const { Project } = require('../models/project')


const router = express.Router()

router.get('/', async (req, res) => {
    const users = await User.query()
    res.json(users)
  });

router.get('/:id', async (req, res) => {
  const user = await User.query().findById(req.params.id).eager('projects')

  res.json(user)
} )

router.post('/', async (req, res) => {
  const newUser = req.body

  const user = await User.query().insert(newUser)
  res.send(user)
})

router.post('/:id/projects', async (req, res) => {
  const user = await User.query().findById(req.params.id)

  await user.$relatedQuery('projects').insert(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  await User.query().deleteById(req.params.id)

  res.redirect('/users')
})

router.delete('/:id/projects/:projectId', async (req, res) => {
  await Project.query().deleteById(req.params.projectId)

  res.redirect(`/users/${req.params.id}`)
})


module.exports = router