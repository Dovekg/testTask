var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    agreement: {
        type: Boolean,
        default: 1
    },
    level: Number,
    description: String,
    email: String,
    phone: String,
    file: {
        data: String,
        result: String,
        self: String
    },
    pay: {
        budget: Number,
        method: Number,
        account: String,
        verified: {
            type: Boolean,
            default: 0
        }
    },
    complished: {
        type: Boolean,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    reply: [{
        text: String,
        time: Date
    }]
});

module.exports = mongoose.model('Task', TaskSchema);
