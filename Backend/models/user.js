var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

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
    studyons: [{type: mongoose.Schema.Types.ObjectId, ref: 'Studyon'}]
}, {
    timestamps: true
});

User.plugin(passportLocalMongoose);

const Users = mongoose.model('User', User);

module.exports = Users;
