const express = require ("express");
const port = process.env.PORT || 8000

const app = express();

app.get("/", (req ,res) => {
    res.sendFile(__dirname+"/index.html");
});

app.listen(port, ()=>{
    console.log("sever is runing")
});