const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('../shardDB/db4.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/item', function (req, res) {
  console.log(req.query.id);
  db.getReviews(req.query.id, (err, item) => {
    if (err) {
      res.send(err);
    } else {
      res.send(item);
    }
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

app.listen(8884, () => {
  console.log("Listening on port 8080");
})