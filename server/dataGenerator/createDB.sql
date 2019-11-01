DROP DATABASE IF EXISTS sdcdata;
CREATE DATABASE sdcdata;

\c sdcdata;

CREATE TABLE products (
  seller varchar(255)
);

CREATE TABLE reviews (
  rating int,
  review text,
  username varchar(255),
  createdAt varchar(255),
  verified boolean,
  wouldRecommend boolean,
  goodValue boolean,
  goodQuality boolean,
  helpful int,
  notHelpful int
);

COPY reviews FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/reviewsData.csv' DELIMITER ',' CSV;
COPY products FROM '/Users/taylorgeorge/Desktop/HackReactor/reviews/productsData.csv' DELIMITER ',' CSV;