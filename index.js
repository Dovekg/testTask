var express = require('express');
var bodyPaser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var ejs = require('ejs');
// var engine = require('ejs-mate');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



var secret = require('./config/secret');



//database connection
mongoose.connect(secret.database, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});

var app = express();

app.set('views', __dirname + '/src');
app.use(express.static(__dirname + '/public'));

//middleware setup
app.use(morgan('dev'));
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: secret.session,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// app.engine('ejs', engine);
// app.set('view engine', 'ejs');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

//passport config

var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Routes
var apiRoutes = require('./api/api');
var indexRoutes = require('./routes/index');

app.use('/', indexRoutes);
app.use('/api', apiRoutes);

//app.get('/', function(req, res){
//    res.render('index');
//});

app.listen(secret.port, function(err){
    if (err) throw err;
    console.log("Server is Runing on port" + secret.port);
})
