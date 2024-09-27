import { useState } from "react";
import axios from "axios"; // used for calling apis
import { Link , useNavigate } from "react-router-dom";


function SignUp() {

    const navigate = useNavigate()

    // user name and password in react is saved in state. The state is a built-in React object that is used to contain data or information about the component. 
    // A component’s state can change over time; whenever it changes, the component re-renders
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')  
    const [type, setType] = useState('')
    
    const handleSignUp = () => {
        console.log(userName, password, type);
        const data = { name: userName, password: password, type: type}
        axios.post('http://localhost:3001/SignUp', data)
            .then((res) => {
                console.log(res, 17)
                if (res.data.code === 200) {
                    navigate('/login')
                }
            })
            .catch((err) => {
                console.log(err, 20);
            })
    }

    return (
        <div>
            <h1>SIGN-UP PAGE </h1>
            
            USERNAME -
            <input type = "text" value ={userName} onChange ={(e) => {
                setUserName(e.target.value)
            }}/>  <br /> <br />
            PASSWORD - 
            <input type = "text" value = {password} onChange = {(e)=>{
                setPassword(e.target.value)
            }} />  <br /> <br />
            USER-TYPE - 
            <input type = "text" value = {type} onChange = {(e)=>{
                setType(e.target.value)
            }} />  <br /> <br />
            
            <button onClick = {handleSignUp}> SUBMIT </button>

            {/* <Link to ="/home">GO TO Home</Link> */}
        </div>
    )
}

export default SignUp;