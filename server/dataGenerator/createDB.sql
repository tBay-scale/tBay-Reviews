DROP DATABASE IF EXISTS sdcdata;
CREATE DATABASE sdcdata;

\c sdcdata;

CREATE TABLE products (
  id serial NOT NULL,
  seller varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id serial NOT NULL,
  productId int,
  rating int,
  review text,
  username varchar(255),
  createdAt varchar(255),
  verified boolean,
  wouldRecommend boolean,
  goodValue boolean,
  goodQuality boolean,
  helpful int,
  notHelpful int,
  PRIMARY KEY (id)
);

COPY products (seller)
FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/productsData.csv' DELIMITER ',' CSV;

COPY reviews (productId, rating, review, username, createdAt, verified, wouldRecommend, goodValue, goodQuality, helpful, notHelpful)
FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/reviewsData.csv' DELIMITER ',' CSV;