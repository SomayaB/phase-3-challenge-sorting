DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store;

CREATE TABLE grocery_items (
  id SERIAL PRIMARY KEY,
  name TEXT,
  price DECIMAL,
  section TEXT
);
