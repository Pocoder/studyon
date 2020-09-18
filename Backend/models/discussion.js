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

const Message = mongoose.model('Message', MessageSchema);
const Discussion = mongoose.model('Discussion', DiscussionSchema);

module.exports = Discussion;
