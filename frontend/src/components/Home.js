import axios from "axios";
import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate()
    const [data, setProduct] = useState([]);


    useEffect(() => {
        
        //navigate to login page if there is no token in localstorage
        if (!localStorage.getItem('token')) {
            navigate('/login');
            return;
        }
        
        //fetching data from backend 
        axios.get('http://localhost:3001/get-products')
            .then(res => {
                // console.log(res.data.data)
                setProduct(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })

        // //navigate to login page if there is no token in localstorage
        // if (!localStorage.getItem('token')) {
        //     navigate('/login');
        // }
    })

    return (
        //on clicking logout button clearing out the token from localstorage and navigating to login page
        <div>
            Home page
            <button onClick= {()=> {
                localStorage.clear();
                navigate('/login');
            }}> Logout </button>  


            <h1>PRODUCT LIST</h1>

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
                        }} src={item.url} alt={item.name}/>
                        <p>{item.name} in {item.category}</p>
                        <p>By {item.seller}</p>
                        <p> PRICE : {item.price} only/-</p>
                    </div>)
                })}
            </div>

        </div>

    );
}

export default Home;