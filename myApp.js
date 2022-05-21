let express = require('express');

let stylesPath = __dirname + "public/style.css";
const addStyle = express.static(stylesPath);


console.log("Hello World");
let app = express();

app.use(addStyle);
app.get("/",(req,res)=>{
    let absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});



































 module.exports = app;
