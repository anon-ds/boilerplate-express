let express = require('express');
console.log("Hello World");
let app = express();

app.get("/",(req,res)=>{
    let absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});



































 module.exports = app;
