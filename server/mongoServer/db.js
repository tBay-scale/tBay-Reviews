const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sdcdata', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connector error: '));
db.once('open', function() {
  console.log("connected");
})

let productSchema = new mongoose.Schema({
  _id: Number,
  seller: String,
  reviews: [{
    reviewId: Number,
    productId: Number,
    rating: Number,
    review: String,
    username: String,
    createdAt: String,
    verified: Boolean,
    wouldRecommend: Boolean,
    goodValue: Boolean,
    goodQuality: Boolean,
    helpful: Number,
    notHelpful: Number
  }]
});

let Product = mongoose.model('Product', productSchema);

const getReviews = function(id, callback) {
  Product.findOne({_id: id}, function(err, item) {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      console.log(item)
      callback(null, item)
    }
  })
}

const writeReview = function(review, callback) {
  Product.updateOne({_id: review.productid}), {
    $push: {reviews: review}
  }, err => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null);
    }
  }
}

module.exports.getReviews = getReviews;
module.exports.writeReview = writeReview;