const faker = require("faker");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const fs = require("fs");

const createProducts = function (num) {
  let products = [];
  for (let i = 0; i < num; i++) {
    let datum = [faker.name.firstName() + faker.name.lastName()];
    products.push(datum);
  }
  return products;
};

const createReviews = function(num) {
  let reviews = [[], [], [], [], []];

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
        Math.floor(Math.random() * 5000000),
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
      ];
      if (review[1] < 1000000) {
        reviews[0].push(review);
      } else if (review[1] < 2000000) {
        reviews[1].push(review);
      } else if (review[1] < 3000000) {
        reviews[2].push(review);
      } else if (review[1] < 4000000) {
        reviews[3].push(review);
      } else {
        reviews[4].push(review);
      }
    }
  }
  return reviews;
}

let productIdInc = 0;
let reviewIdInc = 0;

const convertProductsToCSV = function(data, numRepeats) {
  let output = "";
  for (let i = 0; i < numRepeats; i++) {
    for (let j = 0; j < data.length; j++) {
      output += productIdInc + "," + data[j][0] + "\n";
      productIdInc++;
    }
  }
  return output;
}

const convertReviewsToCSV = function(data, index, numRepeats) {
  let output = "";
  for (let i = 0; i < numRepeats; i++) {
    for (let j = 0; j < data.length; j++) {
      data[j][0] = reviewIdInc;
      reviewIdInc++;
      data[j][1] = index * 1000000 + Math.floor(Math.random() * 1000000);
      for (let k = 0; k < data[j].length; k++) {
        if (k !== data[j].length - 1) {
          output = output + data[j][k] + ",";
        } else {
          output = output + data[j][k] + "\n";
        }
      }
    }
  }
  return output;
}

let products = [];

// for (let i = 0; i < 5; i++) {
//   products.push(convertProductsToCSV(createProducts(1000), 1000));
// }

let productFileCounter = 0;
let reviewFileCounter = 1;

const writeProductCSV = function(data, num) {
  let fileString = "productsData" + num + ".csv";
  fs.appendFile(fileString, data[num], (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Saved");
      if (num < 4) {
        writeProductCSV(data, num + 1);
      } else {
        console.log("Finished");
      }
    }
  })
}

const writeReviewsCSV = function(num) {
  let reviews = createReviews(1000);
  console.log("Created review batch");
  reviews = reviews.map((reviewSet, index) => convertReviewsToCSV(reviewSet, index, 1000));
  console.log("Duplicated and converted review batch to CSV");
  fs.appendFile("reviewsData0.csv", reviews[0], (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Saved");
      fs.appendFile("reviewsData1.csv", reviews[1], err => {
        if (err) {
          throw err;
        } else {
          console.log("Saved!");
          fs.appendFile("reviewsData2.csv", reviews[2], err => {
            if (err) {
              throw err;
            } else {
              console.log("Saved!");
              fs.appendFile("reviewsData3.csv", reviews[3], err => {
                if (err) {
                  throw err;
                } else {
                  console.log("Saved!");
                  fs.appendFile("reviewsData4.csv", reviews[4], err => {
                    if (err) {
                      throw err;
                    } else {
                      console.log("Saved batch " + num);
                      if (num < 4) {
                        writeReviewsCSV(num + 1);
                      } else {
                        console.log("Finished!");
                      }
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
}

writeReviewsCSV(0);