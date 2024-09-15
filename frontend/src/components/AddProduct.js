import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addproduct() {

    const  navigate = useNavigate()
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [seller, setSeller] = useState('');
    const [price, setPrice] = useState('');

    //handling form submission 
    const handleSubmit = (e) => {
        //preventDefault() method use to prevent page from reloading 
        e.preventDefault();
        console.log({ image, name, category, seller, price });

        const data = { url: image, name, category, seller, price }
        axios.post('http://localhost:3001/add-product', data)
            .then(
                navigate('/get/products')  
            ).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2> Add products </h2>
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
    )
}

export default Addproduct;