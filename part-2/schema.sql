DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store;

DROP TABLE IF EXISTS grocery_items;
CREATE TABLE grocery_items (
  id SERIAL PRIMARY KEY,
  name TEXT,
  price DECIMAL,
  section TEXT
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name TEXT
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  order_id INTEGER,
  order_date DATE,
  shopper_id INTEGER,
  item_id INTEGER
);


INSERT INTO shoppers(name)
  VALUES
  ('Alex'), ('Sophie'), ('Charlie'), ('Mary'), ('Tim');

INSERT INTO orders(order_id, order_date, shopper_id, item_id)
  VALUES
  (1, '2017-01-01', 1, 23), (2, '2017-02-01', 2, 16), (3, '2017-03-01', 3, 25), (3, '2017-04-01', 4, 30), (4, '2017-05-01', 5, 41);
