var express = require("express")

var app = express()

app.get("/zero", function(req, res){
  res.send("0")
})



app.listen(3000, function(){
  console.log("Listening on Port 3000");
})
