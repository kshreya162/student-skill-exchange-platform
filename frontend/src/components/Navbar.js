import { Link, useNavigate } from "react-router-dom";

function Navbar(){

const navigate = useNavigate();

const handleLogout = ()=>{

localStorage.removeItem("user");

localStorage.removeItem("token");

navigate("/");

};

return(

<div className="navbar">

<Link to="/profile">Profile</Link>

<Link to="/search">Search</Link>

<Link to="/dashboard">Dashboard</Link>

<Link to="/sent">Sent</Link>

<button onClick={handleLogout}>
Logout
</button>

</div>

);

}

export default Navbar;