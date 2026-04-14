import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { loginUser } from "../api/userApi";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Login(){

const navigate = useNavigate();

const [form,setForm] = useState({

email:"",
password:""

});


const handleChange = (e)=>{

setForm({

...form,
[e.target.name]: e.target.value

});

};


const handleSubmit = async (e)=>{

e.preventDefault();

const result = await loginUser(form);

if(result.token){

/* store user info */
localStorage.setItem("user", JSON.stringify(result.user));

localStorage.setItem("token", result.token);

alert("Login successful");

/* go to profile page */
navigate("/profile");

}else{

alert(result.message);

}

};


return(

<>

<Header/>

<div className="auth-container">

<h2>Login</h2>

<form onSubmit={handleSubmit}>

<input
name="email"
placeholder="Email"
onChange={handleChange}
required
/>

<br/><br/>

<input
name="password"
type="password"
placeholder="Password"
onChange={handleChange}
required
/>

<br/><br/>

<button>
Login
</button>

</form>

<p style={{marginTop:"15px"}}>

New user? 

<Link to="/">
Signup
</Link>

</p>

</div>

</>

);

}

export default Login;