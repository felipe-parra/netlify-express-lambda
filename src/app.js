const express = require('express')

const serverless = require('serverless-http')

const app = express()

const router = express.Router()


router.get('/', (req,res,next) => {
    res.status(200).json({
   message:'ok, its working'
  })
})

app.use('/.netlify/functions/app', router)

module.exports.handler = serverless(app)
