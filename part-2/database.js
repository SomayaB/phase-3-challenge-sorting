var pgp = require('pg-promise')()
var connectionString = 'postgres://localhost:5432/grocery_store'
var db = pgp(connectionString)


var allItems = db.any('SELECT * FROM grocery_items')
