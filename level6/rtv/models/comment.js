const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    commentText: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: 'Issue' 
    }
});

module.exports = mongoose.model("Comments", CommentSchema);
