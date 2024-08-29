import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate()
    const [data, setData] = useState([{
        url: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
        name: 'macbook pro 2',
        category: 'Laptop',
        price: 1003,
        seller: 'Apple'
    }, {
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
    }])
    useEffect(() => {
        
        //navigate to login page if there is no token in localstorage
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    },[])

    return (
        //on clicking logout button clearing out the token from localstorage and navigating to login page
        <div>
            Home page
            <button onClick= {()=> {
                localStorage.clear()
                navigate('/login') 
            }}> Logout </button>  


            <h1>PRODUCT LIST</h1>

            <div style= {{ display: 'flex', flexwrap: 'wrap' }}>

                {/* Note:- if we need to write any JS code in JSX we need to write inside {} */}
                {data.map((item, index) => {
                    return (<div style={{
                        margin: '50px 30px',
                        background: '#eee',
                        width: '27%'
                    }}>
                        <img style={{
                            width: '100%',
                            height: '300px'
                        }} src={item.url} />
                        <p>{item.name} in {item.category}</p>
                        <p>By {item.seller}</p>
                        <p> PRICE : {item.price} only/-</p>
                    </div>)
                })}
            </div>

        </div>

    )
}

export default Home;