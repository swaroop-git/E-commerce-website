const usersModels = require("../models/usersModels");

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
                return res.send({code:200, message:"logged in successfully", token: "tokken"})
            }else{
                res.send({code: 404, message: "Incorrect password"})
            }
        }else{
            return res.send({code: 404, message: 'Name Not Found'})
        }
    }

}

module.exports = {
    signUp,
    login
};