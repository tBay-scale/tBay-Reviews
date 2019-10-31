const faker = require("faker");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const fs = require("fs");

const createDataSet = function(num) {
  let products = [];
  let reviews = [];
  for (let i = 0; i < num; i++) {
    // let datum = {};
    // datum.id = i;
    // datum.seller = faker.name.firstName() + faker.name.lastName();
    let datum = [faker.name.firstName() + faker.name.lastName()];
    products.push(datum);
  }

  const makeText = new LoremIpsum({
    sentencesPerParagraph: {
      min: 1,
      max: 4
    },
    wordsPerSentence: {
      max: 15,
      min: 4
    }
  })

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < 5; j++) {
      // let review = {
      //   id: reviewCounter,
      //   rating: Math.floor(Math.random() * 10),
      //   text: makeText.generateParagraphs(Math.floor(Math.random() * 3) + 1),
      //   user: faker.name.firstName() + faker.name.lastName(),
      //   createdAt: faker.date.recent(),

      //   verified: Math.floor(Math.random() * 2) === 0 ? true : false,
      //   goodValue: Math.floor(Math.random() * 2) === 0 ? true : false,
      //   helpful: Math.floor(Math.random() * 12),
      //   notHelpful: Math.floor(Math.random() * 12),
      //   itemId: i
      // }
      let review = [
        Math.floor(Math.random() * 10),
        makeText.generateParagraphs(Math.floor(Math.random() * 3) + 1),
        faker.name.firstName() + faker.name.lastName(),
        faker.date.recent(),
        Math.floor(Math.random() * 2) === 0 ? true : false,
        Math.floor(Math.random() * 2) === 0 ? true : false,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 12)
      ]
      review.push(review.rating > 5 ? true : false);
      review.push(review.rating > 7 ? true: false);
      // review.wouldRecommend = review.rating > 5 ? true : false;
      // review.goodQuality = review.rating > 7 ? true: false;
      reviews.push(review);
    }
  }

  return [products, reviews];
}

const convertToCSV = function(data) {
  let output = "";
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      output = output + data[i][j] + ",";
    }
    output = output.substring(0, output.length - 1) + "\n";
  }
  output = output.substring(0, output.length - 2);

  return output;
}

const writeCSV = function(csvText) {
  fs.writeFile("data.csv", csvText, (err) => {
    if (err) throw err;
    console.log("Saved");
  })
}

writeCSV(convertToCSV(createDataSet(5)[1]));

module.exports.createDataSet = createDataSet;
module.exports.convertToCSV = convertToCSV;