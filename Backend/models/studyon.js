var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Studyon = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    members: [String]
}, {
    timestamps: true
});

var Studyons = mongoose.model('Studyon', Studyon);

module.exports = Studyons;
