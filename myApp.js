require('dotenv').config();
let express = require('express');

let stylesPath = __dirname + "/public";
const addStyle = express.static(stylesPath);


console.log("Hello World");
let app = express();

// app.use("/public",addStyle);
app.get("/json",(req,res)=>{
    // let absolutePath = __dirname + "/views/index.html";
    if(process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message":"HELLO JSON"});    
    }
    else
    {
        res.json({"message":"Hello json"});
    }
});



































 module.exports = app;
