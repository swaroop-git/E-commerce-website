const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const roleSchema = new Schema({
   roles: String,
   permissions : [{ type: String }]
});

module.exports = mongoose.model('roles', roleSchema);