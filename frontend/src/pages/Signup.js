import { useState } from "react";
import { signupUser } from "../api/userApi";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Signup(){

const navigate = useNavigate();

const [form,setForm] = useState({

name:"",
email:"",
password:"",
bio:""

});

const handleChange = (e)=>{

setForm({

...form,
[e.target.name]: e.target.value

});

};

const handleSubmit = async (e)=>{

e.preventDefault();

const result = await signupUser(form);

alert(result.message);

navigate("/login");

};

return(

<>

<Header/>

<div className="auth-container">

<h2>Create Account</h2>

<form onSubmit={handleSubmit}>

<input
name="name"
placeholder="Full Name"
onChange={handleChange}
required
/>

<br/><br/>

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

<input
name="bio"
placeholder="Short bio (optional)"
onChange={handleChange}
/>

<br/><br/>

<button>
Signup
</button>

</form>

<p style={{marginTop:"15px"}}>

Already have an account? 

<Link to="/login">
Login
</Link>

</p>

</div>

</>

);

}

export default Signup;