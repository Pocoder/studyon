var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


var Studyon = new Schema({
    title: {
        type: String,
        required: true
    },
    members: [memberSchema]
}, {
    timestamps: true
});

var Studyons = mongoose.model('Studyon', Studyon);

module.exports = Studyons;
