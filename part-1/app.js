var express = require("express")

var app = express()

app.get("/", function(req, res){
  res.send('<h1>Simple Web App</h1> <h3>Available routes: /zero, /add, /substract, /double/:number</h3>')
})

app.get("/zero", function(req, res){
  res.send("0")
})

app.get("/add", function(req, res){
  var addition = Number(req.query.a) + Number(req.query.b)
  res.send(String(addition))
})

app.get("/subtract", function(req, res){
  var subtraction = Number(req.query.a) - Number(req.query.b)
  res.send(String(subtraction))
})

app.get("/double/:number", function(req, res){
  var number = Number(req.params.number)
  var doubled = number * 2
  res.send(String(doubled))
})

app.listen(3000, function(){
  console.log("Listening on Port 3000")
})
