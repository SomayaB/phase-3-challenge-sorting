var pgp = require('pg-promise')()
var connectionString = 'postgres://localhost:5432/grocery_store'
var db = pgp(connectionString)


function allItems() {
  return db.any('SELECT * FROM grocery_items')
}

function itemsInSection(section) {
  return db.any('SELECT id, name FROM grocery_items WHERE section = $1', section)
}

function cheapItems() {
  return db.any('SELECT id, price FROM grocery_items WHERE price < 10.00 ORDER BY price ASC')
}

function countItemsInSection(section) {
  return db.any('SELECT COUNT(section) AS number_of_items_in_section FROM grocery_items WHERE section = $1', section)
}

function mostRecentOrders() {
  return db.any('SELECT id, order_date FROM orders ORDER BY order_date DESC LIMIT 10')
}

function lastShopperName() {
  return db.any(
    `SELECT shoppers.name FROM shoppers
    INNER JOIN orders
    ON shoppers.id = orders.shopper_id
    ORDER BY order_date DESC
    LIMIT 1`
  )
}
