const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// -------------------- User Schema Definition --------------------
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,       // Name is mandatory

    },
    email: {
        type: String,
        required: true,       // Email is mandatory
        unique: true           // Email must be unique across users

    },

    // User's hashed password
    password: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;