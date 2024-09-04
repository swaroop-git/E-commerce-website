const productModel = require('../models/productModel');

module.exports.addProduct = async (req, res) => {
    
    // console.log(req.body, "5");
    // res.send('in add product');
    const newProduct = new productModel(req.body);
    const isSaved = await newProduct.save();
    if (isSaved) {
        res.send(`saved`)
    } else {
        res.send(`fail to save`)
    }
}

module.exports.getProducts = async (req, res) => {

    const data = await productModel.find({})
    if (data.length > 0) {
        res.send({ code: 200, message: `Success`, data: data })
    } else if (data.length == 0) {
        res.send({ code: 400, message: `Data not found` })
    } else {
        res.send({ code: 500, message: `Internal server error` })
    }

}