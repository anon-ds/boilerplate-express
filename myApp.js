require('dotenv').config();
let express = require('express');

let stylesPath = __dirname + "/public";
const addStyle = express.static(stylesPath);


console.log("Hello World");
let app = express();

// app.use("/public",addStyle);
app.get("/json",(req,res)=>{
    // let absolutePath = __dirname + "/views/index.html";
    let response = "Hello json";
    if(process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message":response.toUpperCase()});    
    }
    else
    {
        res.json({"message":response});
    }});



































 module.exports = app;
