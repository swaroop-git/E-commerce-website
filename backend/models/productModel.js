const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;

// products schema
const productSchema = new Schema({
    url : { type : String },
    name : String,
    category : String,
    seller : String,
    price : Number
});


module.exports = mongoose.model('products', productSchema);