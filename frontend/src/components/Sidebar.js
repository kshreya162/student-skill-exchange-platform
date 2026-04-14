import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaUser, FaSearch, FaTachometerAlt, FaPaperPlane, FaSignOutAlt } from "react-icons/fa";

import { getRequests } from "../api/requestApi";

function Sidebar(){

const [collapsed,setCollapsed] = useState(false);

const [dark,setDark] = useState(false);

const [pendingCount,setPendingCount] = useState(0);

const navigate = useNavigate();

const handleLogout = ()=>{

localStorage.removeItem("user");

navigate("/");

};

const toggleTheme = ()=>{

const newTheme = !dark;

setDark(newTheme);

document.body.classList.toggle("dark");

localStorage.setItem("theme", newTheme ? "dark" : "light");

};

useEffect(()=>{

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

document.body.classList.add("dark");

setDark(true);

}

},[]);

useEffect(()=>{

loadPending();

/* refresh every 5 seconds */

const interval = setInterval(()=>{

loadPending();

},5000);

return ()=> clearInterval(interval);

},[]);

const loadPending = async ()=>{

const user = JSON.parse(localStorage.getItem("user"));

if(!user) return;

const data = await getRequests(user._id);

const pending = data.filter(r => r.status === "pending").length;

setPendingCount(pending);

};

return(

<div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

<button
className="toggle-btn"
onClick={()=>setCollapsed(!collapsed)}
>

{collapsed ? ">>" : "<<"}

</button>

<h2>
{collapsed ? "S" : "Skill App"}
</h2>

<Link to="/profile">
<FaUser/>
{!collapsed && " Profile"}
</Link>

<Link to="/search">
<FaSearch/>
{!collapsed && " Search"}
</Link>

<Link to="/dashboard">

<FaTachometerAlt/>

{!collapsed && " Dashboard"}

{pendingCount > 0 && !collapsed && (

<span className="notification">

{pendingCount}

</span>

)}

</Link>

<Link to="/sent">
<FaPaperPlane/>
{!collapsed && " Requests"}
</Link>

<button onClick={handleLogout}>
<FaSignOutAlt/>
{!collapsed && " Logout"}
</button>

<button onClick={toggleTheme}>
{dark ? "Light Mode" : "Dark Mode"}
</button>

</div>

);

}

export default Sidebar;