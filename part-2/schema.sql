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
  order_date DATE,
  shopper_id INTEGER,
  item_id INTEGER
);


-- SELECT * FROM grocery_items
--   JOIN orders
--   ON grocery_items.id = orders.item_id

INSERT INTO shoppers(name)
  VALUES
  ('Alex'), ('Sophie'), ('Charlie'), ('Mary'), ('Tim');

INSERT INTO orders(order_date, shopper_id, item_id)
  VALUES
  ('2017-01-01', 1, 23), ('2017-02-01', 2, 16), ('2017-03-01', 3, 25), ('2017-04-01', 4, 30), ('2017-05-01', 5, 41);
