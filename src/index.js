const express = require('express')
const cors = require('cors');
const helmet = require('helmet');
const functions = require('firebase-functions')
const port = 3000

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/test', (req, res) => {
    res.send('test success!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

exports.api = functions.https.onRequest(app)