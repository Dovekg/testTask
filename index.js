var express = require('express');
var bodyPaser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var ejs = require('ejs');
// var engine = require('ejs-mate');


var secret = require('./config/secret');

//database connection
mongoose.connect(secret.database, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});
var db = mongoose.connection;

var app = express();

app.set('views', __dirname + '/src');
app.use(express.static(__dirname + '/public'));

//middleware setup
app.use(morgan('dev'));
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

// app.engine('ejs', engine);
// app.set('view engine', 'ejs');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

//Routes
var apiRoutes = require('./api/api');
app.use('/api', apiRoutes);

app.get('/', function(req, res){
    res.render('index');
});

app.listen(secret.port, function(err){
    if (err) throw err;
    console.log("Server is Runing on port" + secret.port);
})
