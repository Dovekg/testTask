var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
    email: String,
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', userSchema);