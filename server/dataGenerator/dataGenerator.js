const faker = require("faker");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const fs = require("fs");

const createProducts = function(num) {
  let products = [];
  for (let i = 0; i < num; i++) {
    let datum = [faker.name.firstName() + faker.name.lastName()];
    products.push(datum);
  }
  return products;
}

const createReviews = function(num) {

  let reviews = [];

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

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < 3; j++) {
      let review = [
        0,
        Math.floor(Math.random() * 10),
        makeText.generateParagraphs(1),
        faker.name.firstName() + faker.name.lastName(),
        faker.date.recent(),
        Math.floor(Math.random() * 2) === 0 ? true : false,
        Math.floor(Math.random() * 2) === 0 ? true : false,
        Math.floor(Math.random() * 2) === 0 ? true: false,
        Math.floor(Math.random() * 2) === 0 ? true: false,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 12)
      ]
      reviews.push(review);
    }
  }

  return reviews;
}

const convertToCSV = function(data, numRepeats, batchNum) {
  let output = "";
  for (let k = 0; k < numRepeats; k++) {
    for (let i = 0; i < data.length; i++) {
      data[i][0] = Math.floor(Math.random() * 5000000);
      for (let j = 0; j < data[i].length; j++) {
        if (j !== data[i].length - 1) {
          output = output + data[i][j] + ",";
        } else {
          output = output + data[i][j] + "\n"
        }
      }
    }
  }
  return output;
}

const writeCSV = function(productCSV, reviewCSV) {
  fs.appendFile("productsData.csv", productCSV, (err) => {
    if (err) {
      throw err;
    } else {
      fs.appendFile("reviewsData.csv", reviewCSV, (err) => {
        if (err) {
          throw err;
        } else {
          console.log("Saved");
        }
      })
    }
  })
}

const duplicateDataSet = function(data, num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < data.length; j++) {
      let newSet = [];
      for (let k = 0; k < data[0].length; k++) {
        newSet[k] = data[j][k];
      }
      data.push(newSet);
    }
  }
  return data;
}

let productSet = createProducts(1000);
let reviewSet = createReviews(1000);

// productSet = duplicateDataSet(productSet, 10);
// reviewSet = duplicateDataSet(reviewSet, 10);

writeCSV(convertToCSV(productSet, 1000), convertToCSV(reviewSet, 1000));