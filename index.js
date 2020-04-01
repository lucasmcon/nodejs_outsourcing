const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const connection = require("./database/database");

//Model
const User = require("./users/User");

//View engine
app.set('view engine', 'ejs');
//Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.get("/", (req,res)=>{
    res.render("index");
});

app.listen(8080, ()=>{
    console.log("Server running...");
})