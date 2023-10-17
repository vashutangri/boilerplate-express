let express = require('express');
let app = express();
require('dotenv').config()

var bodyParser = require("body-parser");

//console.log("Hello World")


// app.get("/", function(req, res) {
//     res.send('Hello Express');
// })

// absolutePath = __dirname + '/views/index.html'

app.get("/", (req, res) => res.sendFile(__dirname + '/views/index.html'));

absolutePath = __dirname + '/public'

app.use("/public", express.static(absolutePath));

// app.get("/json", (req, res) => {
//     if(process.env.MESSAGESTYLE === 'uppercase') {
//         res.json({"message": "HELLO JSON"});
//     } else {
//         res.json({"message": "Hello json"});
//     }
// })

// app.use(function(req, res, next) {
//     console.log(req.method + " " 
//     + req.path + " - " + req.ip);
//     next();
// });

// app.get("/now", 
// function(req, res, next){
//     req.time = new Date().toString();
//     next();
// },
// function(req, res){
//     res.json({"time": req.time});
// })

app.use(bodyParser.urlencoded({extended: false}));

app.get("/:word/echo", (req, res)=> {
    res.json({"echo": req.params.word});
})

function myResponse(req, res) {
    console.log(`${req.query.first} ${req.query.last}`)
    res.json({name: `${req.query.first} ${req.query.last}`})
}
function myPostResponse(req, res) {
    console.log(`${req.body.first} ${req.body.last}`)
    res.json({name: `${req.body.first} ${req.body.last}`})
}

app.route("/name").get(myResponse).post(myPostResponse)

// app.get("/name", (req, res) => {
//     console.log(`${req.query.firstname} + ${req.query.lastname}`)
//     res.json({name: `${req.query.firstname} + ${req.query.lastname}`})
// })



















 module.exports = app;
