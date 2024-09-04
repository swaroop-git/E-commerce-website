const express = require('express');
const cors = require('cors'); //CORS- Cross origin resource sharing, a way for web application loaded in one domain to interact with resources in a different domain
const bodyParser = require('body-parser')
const productcontroller = require('./controllers/productController')
const app = express();
const port = 3001;

const db = require('./db');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))
app.get('/products',(req,res)=>{
    const data = [
        {
            url: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            name: 'macbook pro 2',
            category: 'Laptop',
            price: 1003,
            seller: 'Apple'
        },
        {
            url: 'https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU',
            name: 'asq12',
            category: 'Camera',
            price: '1lac',
            seller: 'Sony'
        },
        {
            url: 'https://fastly.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE',
            name: '13 mini',
            category: 'Mobile',
            price: '50k',
            seller: 'Apple'
        }
    ];
    res.send({ code: 200 , message: 'Fetch products success.', data : data});
})

app.post('/add-product', productcontroller.addProduct);
app.get('/get-products', productcontroller.getProducts);

app.listen(port,() => {
    console.log(`I am listening on port ${port}`);
})