const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("OLA MUNDO");
});

app.listen(8080, ()=>{
    console.log("Server running...");
})