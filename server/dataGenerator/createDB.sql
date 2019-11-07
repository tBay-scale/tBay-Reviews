DROP DATABASE IF EXISTS sdcdata;
CREATE DATABASE sdcdata;

\c sdcdata;

CREATE TABLE products0 (
  id int NOT NULL,
  seller varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE products1 (
  id int NOT NULL,
  seller varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE products2 (
  id int NOT NULL,
  seller varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE products3 (
  id int NOT NULL,
  seller varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE products4 (
  id int NOT NULL,
  seller varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id int NOT NULL,
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

CREATE TABLE reviews0 (
  id int NOT NULL,
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

CREATE TABLE reviews1 (
  id int NOT NULL,
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

CREATE TABLE reviews2 (
  id int NOT NULL,
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

CREATE TABLE reviews3 (
  id int NOT NULL,
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

CREATE TABLE reviews4 (
  id int NOT NULL,
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

COPY products0 (id, seller)
FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/productsData0.csv' DELIMITER ',' CSV;

COPY products1 (id, seller)
FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/productsData1.csv' DELIMITER ',' CSV;

COPY products2 (id, seller)
FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/productsData2.csv' DELIMITER ',' CSV;

COPY products3 (id, seller)
FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/productsData3.csv' DELIMITER ',' CSV;

COPY products4 (id, seller)
FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/productsData4.csv' DELIMITER ',' CSV;

COPY reviews0 (id, productId, rating, review, username, createdAt, verified, wouldRecommend, goodValue, goodQuality, helpful, notHelpful)
FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/reviewsData0.csv' DELIMITER ',' CSV;

COPY reviews1 (id, productId, rating, review, username, createdAt, verified, wouldRecommend, goodValue, goodQuality, helpful, notHelpful)
FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/reviewsData1.csv' DELIMITER ',' CSV;

COPY reviews2 (id, productId, rating, review, username, createdAt, verified, wouldRecommend, goodValue, goodQuality, helpful, notHelpful)
FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/reviewsData2.csv' DELIMITER ',' CSV;

COPY reviews3 (id, productId, rating, review, username, createdAt, verified, wouldRecommend, goodValue, goodQuality, helpful, notHelpful)
FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/reviewsData3.csv' DELIMITER ',' CSV;

COPY reviews4 (id, productId, rating, review, username, createdAt, verified, wouldRecommend, goodValue, goodQuality, helpful, notHelpful)
FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/reviewsData4.csv' DELIMITER ',' CSV;