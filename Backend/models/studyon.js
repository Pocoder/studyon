var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Message = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

var Discussion = new Schema({
    title: {
        type: String,
        required: true,
    },
    messages: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Message'
    }
}, {
    timestamps: true
});

var Studyon = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    members: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
    discussions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Discussion'
    }
}, {
    timestamps: true
});

const Message = mongoose.model('Message', Message);
const Discussion = mongoose.model('Discussion', Discussion);
const Studyon = mongoose.model('Studyon', Studyon);

module.exports = Studyon;
