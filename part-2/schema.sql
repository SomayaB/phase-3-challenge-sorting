DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store;

CREATE TABLE grocery_items (
  id SERIAL PRIMARY KEY,
  name TEXT,
  price DECIMAL,
  section TEXT
);

CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  shopper_id INTEGER
);


CREATE TABLE order_items (
  order_id INTEGER,
  item_id INTEGER,
  quantity INTEGER
);


INSERT INTO shoppers(name)
  VALUES
  ('Alex'), ('Sophie'), ('Charlie'), ('Mary'), ('Tim');
