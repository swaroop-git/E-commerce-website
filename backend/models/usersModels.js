const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;

// users schema
const userSchema = new Schema({
    url : { type : String },
    name : String,
    type : String,
    password: String
});


module.exports = mongoose.model('users', userSchema);