import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../api/userApi";
import Footer from "../components/Footer";
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

<div>

<h2>Login</h2>

<form onSubmit={handleSubmit}>

<input
name="email"
placeholder="Email"
onChange={handleChange}
/>

<br/><br/>

<input
name="password"
type="password"
placeholder="Password"
onChange={handleChange}
/>

<br/><br/>

<button>Login</button>

</form>

</div>

);

}

export default Login;