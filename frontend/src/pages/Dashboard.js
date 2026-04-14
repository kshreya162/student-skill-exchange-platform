import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";

import { getRequests, updateRequestStatus } from "../api/requestApi";

import { getSkillMatches } from "../api/userApi";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


function Dashboard(){

const user = JSON.parse(localStorage.getItem("user"));

const [requests,setRequests] = useState([]);

const [matches,setMatches] = useState([]);

const [message,setMessage] = useState("");

const [filter,setFilter] = useState("all");

const [loading,setLoading] = useState(true);


useEffect(()=>{

loadRequests();

loadMatches();

},[]);


/* fetch requests */

const loadRequests = async ()=>{

setLoading(true);

const data = await getRequests(user._id);

setRequests(data);

setLoading(false);

};


/* fetch skill matches */

const loadMatches = async ()=>{

const data = await getSkillMatches(user._id);

setMatches(data);

};


/* accept/reject request */

const handleStatus = async (id,status)=>{

await updateRequestStatus({

requestId:id,

status:status

});

setMessage("Request updated");

loadRequests();

};


/* statistics */

const total = requests.length;

const accepted = requests.filter(r => r.status === "accepted").length;

const rejected = requests.filter(r => r.status === "rejected").length;

const pending = requests.filter(r => r.status === "pending").length;


/* filter logic */

const filteredRequests = requests.filter(r => {

if(filter === "all") return true;

return r.status === filter;

});


/* chart data */

const chartData = [

{ name:"Accepted", value: accepted },

{ name:"Pending", value: pending },

{ name:"Rejected", value: rejected }

];


return(

<div className="layout">

<Sidebar/>


<div className="main-content">

<h2>Welcome {user?.name}</h2>


{/* statistics cards */}

<div className="stats-container">

<div className="stat-card">

<div className="stat-number">{total}</div>

<div className="stat-label">Total</div>

</div>


<div className="stat-card">

<div className="stat-number">{accepted}</div>

<div className="stat-label">Accepted</div>

</div>


<div className="stat-card">

<div className="stat-number">{pending}</div>

<div className="stat-label">Pending</div>

</div>


<div className="stat-card">

<div className="stat-number">{rejected}</div>

<div className="stat-label">Rejected</div>

</div>

</div>



{/* pie chart */}

<div className="card">

<h3>Request Overview</h3>

<PieChart width={320} height={260}>

<Pie
data={chartData}
cx="50%"
cy="50%"
outerRadius={90}
dataKey="value"
label
>

<Cell fill="#2ecc71"/>

<Cell fill="#f1c40f"/>

<Cell fill="#e74c3c"/>

</Pie>

<Tooltip/>

<Legend/>

</PieChart>

</div>



{/* skill match suggestions */}

<div className="card">

<h3>Suggested Matches</h3>

{

matches.length === 0 ?

<p>No matches yet</p>

:

matches.map((m)=>(

<div key={m._id}>

<div className="avatar-small">

{m.name.charAt(0).toUpperCase()}

</div>


<p>{m.name}</p>


<div className="badge-container">

{m.skillsOffered.map((skill,index)=>(

<span key={index} className="badge">

{skill}

</span>

))}

</div>


<hr/>

</div>

))

}

</div>



<h3>Requests Received</h3>


{/* filter buttons */}

<div style={{marginBottom:"15px"}}>

<button
className="filter-btn"
onClick={()=>setFilter("all")}
>

All

</button>


<button
className="filter-btn"
onClick={()=>setFilter("accepted")}
>

Accepted

</button>


<button
className="filter-btn"
onClick={()=>setFilter("pending")}
>

Pending

</button>


<button
className="filter-btn"
onClick={()=>setFilter("rejected")}
>

Rejected

</button>

</div>



{message && <p className="success">{message}</p>}



{/* shimmer loading */}

{

loading ?

<>

<div className="shimmer shimmer-card"></div>

<div className="shimmer shimmer-card"></div>

<div className="shimmer shimmer-card"></div>

</>

:

filteredRequests.length === 0 ?

<p>No requests yet</p>

:

filteredRequests.map((req)=>(

<div key={req._id} className="card">


<div className="avatar-small">

{req.sender.name.charAt(0).toUpperCase()}

</div>


<h3>{req.sender.name}</h3>


<p><b>Email:</b> {req.sender.email}</p>


<p><b>Skill</b></p>

<span className="badge">

{req.skill}

</span>


<p><b>Message:</b> {req.message}</p>


<p>

<b>Date:</b>{" "}

{new Date(req.createdAt).toLocaleDateString("en-GB",{

day:"numeric",

month:"short",

year:"numeric"

})}

</p>


<p><b>Status:</b> {req.status}</p>



{req.status === "pending" && (

<div className="action-buttons">

<button
className="accept"
onClick={()=>handleStatus(req._id,"accepted")}
>
Accept
</button>

<button
className="reject"
onClick={()=>handleStatus(req._id,"rejected")}
>
Reject
</button>

</div>

)}


</div>

))

}



<Footer/>


</div>


</div>

);

}


export default Dashboard;