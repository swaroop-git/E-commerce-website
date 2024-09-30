import { useState } from "react";
import axios from "axios"; // used for calling apis
import { Link , useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate()

    // user name and password in react is saved in state. The state is a built-in React object that is used to contain data or information about the component. 
    // A component’s state can change over time; whenever it changes, the component re-renders
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')  
    
    const handleLogin = () => {
        console.log(userName, password);
        const data = { name: userName, password: password }
        axios.post('http://localhost:3001/login', data)
            .then((res) => {
                
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    if(res.data.user.roles[0] === 'USER'){
                        navigate('/home')
                    }
                    if(res.data.user.roles[0] === 'SELLER'){
                        navigate('/get/products')
                    }
                }else(
                    navigate('/SignUp')
                )
            })
            .catch((err) => {
                console.log(err, "28");
            })
    }

    return (
        <div>
            <h1>LOGIN PAGE </h1>

            USERNAME -
            <input type = "text" value ={userName} onChange ={(e) => {
                setUserName(e.target.value)
            }}/>  <br /> <br />
            
            PASSWORD - 
            <input type = "text" value = {password} onChange = {(e)=>{
                setPassword(e.target.value)
            }} />  <br /> <br />
            
            <button onClick = {handleLogin}> SUBMIT </button>

            {/* <Link to ="/home">GO TO Home</Link> */}
        </div>
    )
}

export default Login;