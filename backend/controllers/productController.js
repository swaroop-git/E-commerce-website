const productModel = require('./')

module.exports.addProduct = (req,res) => {

    console.log(req.body, "5");
    res.send('in add product')
}