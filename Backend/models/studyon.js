var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
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

var DiscussionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    messages: [MessageSchema]
}, {
    timestamps: true
});

var StudyonSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    discussions: [DiscussionSchema]
}, {
    timestamps: true
});

const Message = mongoose.model('Message', MessageSchema);
const Discussion = mongoose.model('Discussion', DiscussionSchema);
const Studyon = mongoose.model('Studyon', StudyonSchema);

module.exports = Studyon;
