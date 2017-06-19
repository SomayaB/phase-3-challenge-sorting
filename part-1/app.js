var express = require("express")

var app = express()

app.get("/zero", function(req, res){
  res.send("0")
})

app.get("/add", function(req, res){
  var addition = Number(req.query.a) + Number(req.query.b)
  res.send(String(addition))
})


app.listen(3000, function(){
  console.log("Listening on Port 3000")
})
