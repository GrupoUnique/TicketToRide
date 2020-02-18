const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
        _id:mongoose.Schema.Types.ObjectId,
        user:String,
        pass:String,
    }
);

module.exports = mongoose.model('User', UserSchema);