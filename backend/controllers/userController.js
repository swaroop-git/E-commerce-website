const usersModels = require("../models/usersModels");
const jwt = require('jsonwebtoken');


const signUp = async (req,res) => {

    const name = req.body.name;
    const password = req.body.password;
    const url = req.body.url;
    const type = req.body.type || 'USER';
    if (!name) {
        return res.send({ code: 400, message: 'Name Required'})
    }else if(!password){
        return res.send({ code: 400, message: 'Password Required'})
    }else{
        const newUser = await new usersModels({name, password, url, type})
        const savedUser = await newUser.save()
        if(savedUser){
            res.send({code: 200, message: 'Saved'})
        } else {
            res.send({code: 500, message: "server Err"})
        }
    }

    
}

const login = async (req,res)=>{

    console.log(req.body, 'req.body');
    
    const name = req.body.name;
    const password = req.body.password;

    if (!name) {
        return res.send({ code: 400, message: 'Name Required'})
    }else if(!password){
        return res.send({ code: 400, message: 'Password Required'})
    }else{

        const isNameExists = await usersModels.findOne({name: name})
        if(isNameExists){
            console.log(isNameExists.password, "isNameExists"); 
            if(isNameExists.password === req.body.password) {
                const token = jwt.sign({
                    expAfter: Math.floor(Date.now() / 1000) + (60 * 60),
                    name: isNameExists.name,
                    password: isNameExists.password,
                    type: isNameExists.type
                }, 'MYKEY');
                return res.send({code:200, message:"logged in successfully", token: token, userId: isNameExists._id})
            }else{
                res.send({code: 404, message: "Incorrect password"})
            }
        }else{
            return res.send({code: 404, message: 'Name Not Found'})
        }
    }

}

const addToCart = async (req,res) => {

    console.log(req.body, "62");
    const isUpdate = await usersModels.updateOne({ _id: req.body.userId},{
        $addToSet: { cart: req.body.productId }
    })

    if(isUpdate){
        return res.send({code :200, message: 'Added to Cart'});
    }else{
        return res.send({ code: 500, message: 'Server Err'});
    }

}

const getCart = async (req,res) =>{
    const userId = req.body.userId;

    const data = await usersModels.findOne({_id: userId}).populate('cart');
    if(data){
        return res.send({code :200, message: 'Get cart success', data: data});
    }else{
        return res.send({ code: 500, message: 'Server Err'});
    }

}

module.exports = {
    signUp,
    login,
    addToCart,
    getCart
};