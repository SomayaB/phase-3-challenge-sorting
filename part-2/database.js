var pgp = require('pg-promise')()
var connectionString = 'postgres://localhost:5432/grocery_store'
var db = pgp(connectionString)


function allItems() {
  db.any('SELECT * FROM grocery_items')
}

function itemsInSection(section) {
  db.any('SELECT id, name FROM grocery_items WHERE section = $1', section)
}
