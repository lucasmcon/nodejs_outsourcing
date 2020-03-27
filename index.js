const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");


app.set("view engine", "ejs");

app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.send("OLA MUNDO");
});

app.listen(8080, ()=>{
    console.log("Server running...");
})