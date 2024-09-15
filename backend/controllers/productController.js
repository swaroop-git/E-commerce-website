const productModel = require('../models/productModel');

const addProduct = async (req, res) => {
    try {
        const newProduct = new productModel(req.body);
        await newProduct.save();
    } catch (error) {
        console.error('Error while saving products:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

const getProducts = async (req, res) => {

    try {
        const data = await productModel.find({});
        if (data.length > 0) {
            res.send({ code: 200, message: `Success`, data: data })
        }
        if (data.length == 0) {
            res.send({ code: 400, message: `Data not found` })
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send({ message: 'Internal server error' });
    }


}

module.exports = {
    addProduct,
    getProducts
}