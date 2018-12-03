const express = require('express')
const app = express()
const port = 3030;
app.use(express.static('public'))

app.get('/demo', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
