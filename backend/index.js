const express = require('express');
const cors = require('cors'); //CORS- Cross origin resource sharing, a way for web application loaded in one domain to interact with resources in a different domain
const bodyParser = require('body-parser')
const productcontroller = require('./controllers/productController')
const userController = require('./controllers/userController')
const rolesController = require('./controllers/rolesController')
const app = express();
const port = 3001;

const data = require('./db');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.get('/products',(req,res)=>{
    res.send({ code: 200 , message: 'Fetch products success.', data : data});
})

app.post('/add-product', productcontroller.addProduct);
app.get('/get-products', productcontroller.getProducts);
app.post('/edit-product', productcontroller.editProduct);
app.get('/get-product/:id', productcontroller.getProductById);
app.post('/delete-products', productcontroller.deleteProducts);

app.post('/SignUp', userController.signUp);
app.post('/login', userController.login);
app.post('/add-to-cart', userController.addToCart);
app.post('/get-user-cart', userController.getCart);


app.post('/add-role', rolesController.addRole);
app.post('/delete-role', rolesController.deleteRole);

app.listen(port,() => {
    console.log(`I am listening on port ${port}`);
})