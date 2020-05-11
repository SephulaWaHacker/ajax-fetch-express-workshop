const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.status(200).sendFile("index.html")
});

app.get("/getuser", (req,res) => {
    console.log("getting user...")
    res.status(200).json({
        name: "Nomvelo",
        gender: "Non-conforming"
    })
});

app.post("/postdata", (req,res) => {
    console.log(req.body)

    res.status(200).send({
        message: "Data received"
    })
});


app.listen(3006, () => {
    console.log(`app listing at http:127.0.0.1:3006`);
});