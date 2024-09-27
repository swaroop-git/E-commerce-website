import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function GetProducts() {

    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [deleteData, setDeleteData] = useState([]);
    const [refresh, setRefresh] = useState(false); // using refresh flag to refresh the page and jump to get products page keeping value as false by default.
    // console.log(deleteData, "deleteData");

    useEffect(() => {
        axios.get('http://localhost:3001/get-products')
            .then(res => {
                console.log(res.data.data);
                setData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [refresh])


    const handleDelete = () => {
        const data = deleteData;
        axios.post('http://localhost:3001/delete-products', data)
        .then(res =>{
            console.log(res.data, "30");
            setDeleteData(res.data);
            if(res.data.code == 200){
                setRefresh(!refresh);
            }  
        })
        .catch(err =>{
            console.log(err, "30");
        })
    }

    const handleAddToCart = (productId) => {
        const _productId = productId;
        const userId = localStorage.getItem('userId');

        console.log({ productId: _productId, userId });

        const data = { productId: _productId, userId }
        axios.post('http://localhost:3001/add-to-cart', data)
            .then(res => {
                console.log(res.data, "52");
                if (res.data.code == 200) {
                    setRefresh(!refresh)
                }

            })
            .catch(err => {
                console.log(err, "30");

            })
    }

    return (
        <>
            {deleteData.length > 0 && <button onClick={ handleDelete }> DELETE SELECTED </button>}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <h2>Products : </h2>

                {data && data.length > 0 && data.map((item, index) => {
                    return (
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
                            <button onClick={() => {
                                console.log(item._id, "38");
                                navigate(`/get/product/${item._id}`)
                            }}>EDIT</button>
                            <input type="checkbox" onChange={(e) => {
                                console.log(e.target.checked, "46");
                                if (e.target.checked === true) {
                                    setDeleteData([...deleteData, item._id])
                                } else {
                                    setDeleteData(deleteData.filter(s => s !== item._id))
                                }
                            }}></input>
                            <button onClick={() => {
                                handleAddToCart(item._id)
                            }}>ADD TO CART</button>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default GetProducts;