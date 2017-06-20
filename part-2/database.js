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
