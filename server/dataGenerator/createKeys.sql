\c sdcdata;

ALTER TABLE reviews ADD COLUMN id SERIAL PRIMARY KEY;

UPDATE reviews
SET productId = FLOOR(RAND() * 10000000 + 1);