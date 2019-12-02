const express = require('express')
const { Trail } = require('../models/trail')
const router = express.Router()
// const request = require('request')


// const allTrails = []

// request('https://www.epicmix.com/vailresorts/sites/epicmix/api/mobile/terrain.ashx', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//     body.terrains.forEach(trail => {
//       allTrails.push(trail) 
//     });
// })



router.get('/', async (req, res) => {
    // console.log(allTrails.resortID)
    // const trails = await Trail.query()
    res.json(allTrails)
  })



module.exports = router