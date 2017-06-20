var chai = require('chai')
var expect = chai.expect
var db = require('./database')

describe('itemsInSection()', function() {
	it('should find the IDs and names of all grocery items in the given section', function(done) {
    db.itemsInSection('bulk').then(function(result){
      expect(result).to.eql(
        [{id: 16, name: 'Flour'}, {id:33, name: 'Pasta'}, {id: 36, name: 'Rice'}
      ])
      done()
    }).catch(function(error){
      console.log('Whoops, my function doesnt behave as expected.', error)
    })
  })
})

describe('cheapItems()', function() {
	it('should find the IDs and prices of all grocery items that cost less than $10.00, ordered from lowest to highest price', function(done) {
    db.cheapItems().then(function(result){
      expect(result[0]).to.eql({id: 15, price: '0.49'})
      expect(result[result.length - 1]).to.eql({id: 22, price: '9.31'})
      done()
    }).catch(function(error){
      console.log('Whoops, my function doesnt behave as expected.', error)
    })
  })
})

describe('countItemsInSection()', function() {
	it('should get the count of all grocery items in the given section', function(done) {
    db.countItemsInSection('packaged').then(function(result){
      expect(result[0].number_of_items_in_section).to.eql('5')
      done()
    }).catch(function(error){
      console.log('Whoops, my function doesnt behave as expected.', error)
    })
  })
})
