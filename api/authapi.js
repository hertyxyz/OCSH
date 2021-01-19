const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())

app.get('/status', (req, res) => {
  res.json({ data: 'status is good' })
})

module.exports = app
