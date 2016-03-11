var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MethodSchema = new Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('Method', MethodSchema);
