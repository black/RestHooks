const express = require('express'),
    app = express(),
    server = app.listen(1000)

app.use(express.static('public'));
console.log("server running...");

app.get("/", (req, res) => {
   
});