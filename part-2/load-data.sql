\c grocery_store

COPY grocery_items FROM '/Users/Somaya/Desktop/LGProjects/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;

SELECT * FROM grocery_items;
