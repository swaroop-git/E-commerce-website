import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function GetProduct(params) {

    const navigate = useNavigate()
    const {id} = useParams()
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [seller, setSeller] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() =>{ 
        console.log(id,"10");
        axios.get(`http://localhost:3001/get-product/${id}`)
        .then(res =>{
            console.log(res.data.data,"13");
            setImage(res.data.data.url);
            setName(res.data.data. name);
            setCategory(res.data.data.category);
            setSeller(res.data.data.seller);
            setPrice(res.data.data.price);
        }).catch(err => {
            console.log(err);
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ id: id, url: image, name, category, seller, price: Number(price) });
        const data = ({ id: id, url: image, name, category, seller, price: Number(price) });
        try {
            axios.post(`http://localhost:3001/edit-product`, data)
            .then(res=>{
            console.log(res, "35");
            if(res.data.code == 200){
                navigate('/get/products');
            }
            })
        } catch (error) {
            throw error
        }
    }

    return <div>
        Get product

        <form onSubmit={handleSubmit} >
                Image: <input 
                className="inputs" 
                type="text" 
                onChange ={(e) => setImage(e.target.value)} 
                value={image} /> <br />

                Name:  <input 
                className="inputs" 
                type="text" 
                onChange ={(e) => setName(e.target.value)}
                value={name} /> <br />

                Category: <input 
                className="inputs" 
                type="text" 
                onChange ={(e) => setCategory(e.target.value)} 
                value={category} /> <br />

                Seller:   <input 
                className="inputs" 
                type="text" 
                onChange ={(e) => setSeller(e.target.value)} 
                value={seller} /> <br />

                Price: <input 
                className="inputs" 
                type="number" 
                onChange ={(e) => setPrice(e.target.value)} 
                value={price} /> <br />

                <button type="submit"> SUBMIT </button>
            </form>
    </div>
}

export default GetProduct;
