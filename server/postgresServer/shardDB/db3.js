const { Client } = require('pg');
const format = require('pg-format');

const client = new Client({
  host: "localhost",
  port: "5432",
  username: "taylorgeorge",
  database: "sdcdata3"
});

client.connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database: " + err);
  })

const getReviews = function(productId, callback) {
  let queryString = "SELECT * from reviews WHERE productid = " + productId;
  client.query(queryString, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res.rows);
    }
  })
}

const writeReview = function(review, callback) {
  let options = [];
  for (let field in review) {
    options.push(review[field]);
  }
  let queryString = "INSERT INTO reviews (productId, rating, review, username, createdAt, verified, wouldRecommend, goodValue, goodQuality, helpful, notHelpful) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
  client.query(queryString, options, (err,res) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null);
    }
  })

}

module.exports.getReviews = getReviews;
module.exports.writeReview = writeReview;