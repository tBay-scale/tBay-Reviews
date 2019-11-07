require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
const db0 = require('./shardDB/db0.js');
const db1 = require('./shardDB/db1.js');
const db2 = require('./shardDB/db2.js');
const db3 = require('./shardDB/db3.js');
const db4 = require('./shardDB/db4.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use(express.static(path.join(__dirname, "./testClient")));

app.get('/item', function (req, res) {
  let id = Math.floor(Math.random() * 5000000);
  let serverNum = Math.floor(id / 1000000);
  let serverAddress = "http://localhost:888" + serverNum + "/item?id=" + id;
  axios.get(serverAddress)
  .then (response => {
    res.send(response.data);
  })
  .catch (err => {
    console.log("error");
    res.send(err);
  })
})

app.post('/item', function(req, res) {
  db.writeReview(req.body, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("inserted review");
    }
  })
})

app.listen(8080, () => {
  console.log("Listening on port 8080");
})