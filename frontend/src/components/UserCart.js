import axios from "axios";
import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";

function UserCart() {

    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        const data = { userId: localStorage.getItem('userId') }
        console.log(data, "12");

        axios.post('http://localhost:3001/get-user-cart', data)
            .then(res => {
                console.log(res.data.data.cart, "14");
                setData(res.data.data.cart)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
        <h1> YOUR CART </h1>
        <button onClick= {()=> {
            localStorage.clear();
            navigate('/login');
        }}> Logout </button>  


        <h2>PRODUCT LIST</h2>

        <div style= {{ display: 'flex', flexwrap: 'wrap', justifyContent:'space-between' }}>

            {/* Note:- if we need to write any JS code in JSX we need to write inside {} */}
                {data.map((item, index) => {
                    return (<div style={{
                        margin: '50px 30px',
                        background: '#eee',
                        flex: '1 1 calc(33% - 20px)', // Adjust width of each item
                        boxSizing: 'border-box'
                    }}>
                        <img style={{
                            width: '100%',
                            height: 'auto', // Maintain aspect ratio
                            display: 'block'
                        }} src={item.url} alt={item.name} />
                        <p>{item.name} in {item.category}</p>
                        <p>By {item.seller}</p>
                        <p> PRICE : {item.price} only/-</p>
                    </div>)
                })}
        </div>

    </div>
    )
}

export default UserCart;