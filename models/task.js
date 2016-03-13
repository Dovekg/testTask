var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    agreement: {
        type: Boolean,
        default: 1
    },
    level: Number,
    task_description: String,
    email: String,
    phone: String,
    file: {
        file_data: String,
        file_result: String,
        file_self: String
    },
    pay: {
        budget: Number,
        pay_method: Number,
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
    created_at: {
        type: Date,
        default: Date.now()
    },
    reply: [{
        text: String,
        time: Date
    }]
});

var Task = module.exports = mongoose.model('Task', taskSchema);


module.exports.getTasks = function(callback, limit){
  Task.find(callback).limit(limit).sort([['created_at', 'descending']]);
};

module.exports.getTaskById = function(id, callback){
  Task.findById(id, callback);
};

module.exports.createTask = function(task, callback){
  var add = {
    agreement: task.agreement,
    level: task.level,
    task_description: task.task_description,
    email: task.email,
    phone: task.phone,
    file: {
        data_file: task.file.data_file,
        self_file: task.file.self_file
    },
    pay: {
        budget: task.pay.budget,
        pay_method: task.pay.pay_method,
        account: task.pay.account
    }
  }

  Task.create(add, callback);
}
