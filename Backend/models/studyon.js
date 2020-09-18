var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudyonSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    discussions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Discussion'}]
}, {
    timestamps: true
});


const Studyon = mongoose.model('Studyon', StudyonSchema);

module.exports = Studyon;
