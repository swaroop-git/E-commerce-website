import {useEffect} from "react"
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate()
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
        </div>

    )
}

export default Home;