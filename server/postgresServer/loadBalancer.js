require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

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