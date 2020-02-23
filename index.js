var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
app.use(express.json())

app.get("/hello", (req, res) => {
    console.log("Making rerquest to /hello")
    res.send("Zhangyan chidabian");
});

var poems = ["人生如梦，一尊还酹江月", "待从头，收拾旧山河，朝天阙", "剪不断，理还乱，是离愁", "转朱阁，低绮户，照无眠"];
var comments = [
    ['111hgfjhvghv','111hjgfhfkgh','111hgfdh'],
    ['222wehrowndflksdnf','222her'], 
    ['333oqiuro2i3jro','333jskdfa'], 
    ['444aslifji','444sdf']
];

app.get("/poem", (req, res) => {
    randomIdx = Math.floor(Math.random()*poems.length)
    var randomItem = {
        poem: poems[randomIdx],
        idx: randomIdx
    }

    res.send(JSON.stringify(randomItem));
});

app.get("/comment/:idx", (req, res) => {
    var randomItem = comments[req.params.idx];
    res.send(JSON.stringify(randomItem));
});

app.post("/comment/:idx", (req, res) => {
    console.log("Adding comment to index " + req.params.idx)
    console.log(req.body)
    comments[req.params.idx].push(req.body.comment);
    res.send('success')
})

app.listen(1234, () => {
  console.log("Server is listening on port: 1234");
});

