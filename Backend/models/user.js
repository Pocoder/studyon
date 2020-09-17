var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var studyonSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var User = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    },
    studyons: [studyonSchema]
}, {
    timestamps: true
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
