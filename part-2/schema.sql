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
  id SERIAL PRIMARY KEY,
  shopper_id INTEGER,
  item_id INTEGER,
  quantity INTEGER
);


-- SELECT * FROM grocery_items
--   JOIN orders
--   ON grocery_items.id = orders.item_id

INSERT INTO shoppers(name)
  VALUES
  ('Alex'), ('Sophie'), ('Charlie'), ('Mary'), ('Tim');

INSERT INTO orders(shopper_id, item_id, quantity)
  VALUES
  (1, 23, 2), (2, 16, 1), (3, 25, 5), (4, 30, 6), (5, 41, 2);
