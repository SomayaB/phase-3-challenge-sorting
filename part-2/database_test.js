var chai = require('chai')
var expect = chai.expect
var db = require('./database')

describe('itemsInSection()', function() {
	it('should find the IDs and names of all grocery items in the given section', function(done) {
    db.itemsInSection('bulk').then(function(result){
      expect(result).to.equal(
        [{id: 16, name: 'Flour'}, {id:33, name: 'Pasta'}, {id: 36, name: 'Rice'}
      ])
      done()
    }).catch(function(error){
      console.log('Whoops, my function doesnt behave as expected.', error)
    })
  })
})
