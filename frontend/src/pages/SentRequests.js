import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import { getSentRequests } from "../api/requestApi";

import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";
function SentRequests(){

const user = JSON.parse(localStorage.getItem("user"));

const [requests,setRequests] = useState([]);


useEffect(()=>{

loadRequests();

},[]);


const loadRequests = async ()=>{

const data = await getSentRequests(user._id);

setRequests(data);

};


return(

<div className="layout">

<Sidebar/>

<div className="main-content">

<h2>Requests Sent</h2>

{

requests.length === 0 ?

<p>No requests sent</p>

:

requests.map((req)=> (

<div key={req._id} className="card">

<h3>{req.receiver.name}</h3>

<p><b>Email:</b> {req.receiver.email}</p>

<p><b>Skill:</b> {req.skill}</p>

<p><b>Status:</b> {req.status}</p>

</div>

))

}
<Footer/>
</div>

</div>

);

}

export default SentRequests;