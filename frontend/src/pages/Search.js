import { useState } from "react";

import { searchUsers } from "../api/userApi";

import { sendRequest } from "../api/requestApi";

import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";

function Search(){

const currentUser = JSON.parse(localStorage.getItem("user"));

const [skill,setSkill] = useState("");

const [results,setResults] = useState([]);

const [message,setMessage] = useState("");

const [loading,setLoading] = useState(false);



/* search */

const handleSearch = async ()=>{

if(!skill){

setMessage("Please enter a skill");

return;

}

setLoading(true);

const data = await searchUsers(skill);

setResults(data);

setLoading(false);

};



/* send request */

const handleRequest = async (receiverId)=>{

const result = await sendRequest({

sender: currentUser._id,

receiver: receiverId,

skill: skill,

message: "I want to learn this skill"

});

setMessage(result.message);

};



/* match score */

const calculateMatch = (wanted, offered)=>{

if(!wanted?.length) return 0;

const matched = wanted.filter(skill =>
offered.includes(skill)
);

return Math.round(
(matched.length / wanted.length) * 100
);

};



return(

<div className="layout">

<Sidebar/>

<div className="main-content">

<h2>Search Users</h2>

<input
placeholder="Enter skill (example React)"
onChange={(e)=>setSkill(e.target.value)}
/>

<button onClick={handleSearch}>
Search
</button>

<br/><br/>

{message && <p className="success">{message}</p>}

{loading && <p>Loading...</p>}



{

results
.filter(user => user._id !== currentUser._id)
.map((user)=>{

const matchScore = calculateMatch(

currentUser.skillsWanted,

user.skillsOffered

);

return(

<div key={user._id} className="card">

<div className="avatar-small">
{user.name.charAt(0).toUpperCase()}
</div>

<h3>{user.name}</h3>

<p><b>Email:</b> {user.email}</p>


<p><b>Skills</b></p>

<div className="badge-container">

{user.skillsOffered.map((skill,index)=> (

<span key={index} className="badge">
{skill}
</span>

))}

</div>


<p className="match-score">

Match Score: {matchScore}% {"⭐".repeat(Math.ceil(matchScore/20))}

</p>


<button onClick={()=>handleRequest(user._id)}>
Send Request
</button>


</div>

);

})

}


<Footer/>

</div>

</div>

);

}

export default Search;