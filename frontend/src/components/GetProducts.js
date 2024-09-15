import axios from "axios";
import {useEffect, useState} from "react";

function GetProducts() {

    const [data, setData] = useState([]);
    console.log(data, "8");

    useEffect(() => {
        axios.get('http://localhost:3001/get-products')
            .then(res => {
                console.log(res.data.data);
                setData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div>
           <h2>Products : </h2> 

            {data && data.length>0 && data.map((item, index)=> {
                return(
                    <div style={{
                        margin: '50px 30px',
                        background: '#eee',
                        width: '27%'
                    }}>
                        <img style={{
                            width: '100%',
                            height: '300px'
                        }} src={item.url} alt="" />
                        <p>{item.name} in {item.category}</p>
                        <p>By {item.seller}</p>
                        <p> PRICE : {item.price} only/-</p>
                    </div>
                )
            })}
        </div>
    )
}

export default GetProducts;