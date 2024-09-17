const productModel = require('../models/productModel');

// add product to data base
const addProduct = async (req, res) => {
    try {
        const newProduct = new productModel(req.body);
        await newProduct.save();
    } catch (error) {
        console.error('Error while saving products:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

// get product from data base
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

// Update product in data base
const editProduct = async (req, res) => {

    console.log(req.body, 31);

    const newData = {}

    if (req.body.name) {
        newData['name'] = req.body.name
    }
    if (req.body.url) {
        newData['url'] = req.body.url
    }
    if (req.body.category) {
        newData['category'] = req.body.category
    }
    if (req.body.seller) {
        newData['seller'] = req.body.seller
    }
    if (req.body.price) {
        newData['price'] = req.body.price
    }

    const id = req.body.id
    let filter = { _id: id };
    let doc = await productModel.findOneAndUpdate(filter, newData, { new: true });
    if (doc) {
        res.send({ code: 200, message: "edit success", data: doc })
    } else {
        res.send({ code: 500, message: "Server Err." })
    }
}

//get product by Id 
const getProductById = async (req, res) => {
    let data = await productModel.findById(req.params.id);
    if (data) {
        res.send({ code: 200, message: "fetch by Id success", data: data })
    } else {
        res.send({ code: 500, message: "failed to fetch by Id", data: data })
    }
}

module.exports = {
    addProduct,
    getProducts,
    editProduct,
    getProductById
}