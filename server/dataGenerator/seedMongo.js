const mongoose = require('mongoose');
const faker = require("faker");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

mongoose.connect('mongodb://localhost/sdcdata', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connector error: '));
db.once('open', function() {
  console.log("connected");
})

let productIdInc = 1;
let reviewIdInc = 1;

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

let numDocs = 10;

const makeText = new LoremIpsum({
  sentencesPerParagraph: {
    min: 1,
    max: 2
  },
  wordsPerSentence: {
    max: 5,
    min: 2
  }
})

let batchCounter = 1;

const generateData = function() {
  let docsToAdd = [];
  for (let i = 0; i < 10000; i++) {
    let reviews = [];
    for (let j = 0; j < Math.floor(Math.random() * 5) + 1; j++) {
      reviews.push({
        reviewId: reviewIdInc,
        productId: Math.floor(Math.random() * 5000000),
        rating: Math.floor(Math.random() * 10),
        review: makeText.generateParagraphs(1),
        username: faker.name.firstName() + faker.name.lastName(),
        createdAt: faker.date.recent(),
        verified: (Math.floor(Math.random() * 2) === 0),
        wouldRecommend: (Math.floor(Math.random() * 2) === 0),
        goodValue: (Math.floor(Math.random() * 2) === 0),
        goodQuality: (Math.floor(Math.random() * 2) === 0),
        helpful: Math.floor(Math.random() * 12),
        notHelpful: Math.floor(Math.random() * 12)
      });
      reviewIdInc++;
    }
    let newDoc = {
      seller: faker.name.firstName() + faker.name.lastName(),
      reviews: reviews
    };
    docsToAdd.push(newDoc);
  }
  return docsToAdd;
}

let products = generateData();

const insertBatch = function() {

  let docsToAdd = [];

  for (let i = 0; i < products.length; i++) {
    products[i]._id = productIdInc;
    docsToAdd.push(new Product(products[i]));
    productIdInc++;
  }

  Product.insertMany(docsToAdd, {
    ordered: false,
    bypassDocumentValidation: true
  })
  .then(() => {
    if (batchCounter < 500) {
      console.log("Finished batch " + batchCounter);
      batchCounter++;
      insertBatch();
    } else {
      console.log("Saved");
    }
  })
  .catch(err => console.log("Error: " + err))
}

insertBatch();