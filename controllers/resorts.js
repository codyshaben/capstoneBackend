const express = require('express')
const { Resort } = require('../models/resort')
const router = express.Router()
// const request = require('request')

// const allResorts = []

// request('http://www.epicmix.com/vailresorts/sites/epicmix/api/mobile/mountains.ashx', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//     body.mountains.forEach(resort => {
//       allResorts.push(resort) 
//     });
//     console.log(allResorts)
// })

router.get('/', async (req, res) => {
    const resorts = await Resort.query()
    res.json(resorts)
  })

module.exports = router