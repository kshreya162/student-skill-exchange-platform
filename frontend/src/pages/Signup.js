import { useState } from "react";

import { signupUser } from "../api/userApi";

function Signup(){

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

};


return(

<div>

<h2>Signup</h2>

<form onSubmit={handleSubmit}>

<input
name="name"
placeholder="Name"
onChange={handleChange}
/>

<br/><br/>

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

<input
name="bio"
placeholder="Bio"
onChange={handleChange}
/>

<br/><br/>

<button>Signup</button>

</form>

</div>

);

}

export default Signup;