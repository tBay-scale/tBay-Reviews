const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// app.use(express.static(path.join(__dirname, "/../../client")));

app.use(express.static(path.join(__dirname, "./testClient")));

app.get('/item', function (req, res) {
  console.log(req.query);
  db.getReviews(req.query.id, (err, item) => {
    if (err) {
      res.send(err);
    } else {
      res.send(item);
    }
  })
})

app.post('/item', function(req, res) {
  console.log(req.body);
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