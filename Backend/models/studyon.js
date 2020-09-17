var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Studyon = new Schema({
    title: {
        type: String,
        default: ''
    },
});

module.exports = mongoose.model('User', User);
