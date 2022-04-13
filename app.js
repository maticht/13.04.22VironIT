const express = require('express')
const app = express()
const appRouts = require('./routes/action')

app.use('', appRouts)

module.exports = app