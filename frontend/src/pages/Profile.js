import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { updateSkills } from "../api/userApi";

function Profile(){

const user = JSON.parse(localStorage.getItem("user"));

const [skillsOffered,setSkillsOffered] = useState("");
const [skillsWanted,setSkillsWanted] = useState("");
const [bio,setBio] = useState(user?.bio || "");
const [profilePic,setProfilePic] = useState(user?.profilePic || "");

const [showPhotoInput,setShowPhotoInput] = useState(false);
const [showBioInput,setShowBioInput] = useState(false);



/* completion calculation */

const completionScore = ()=>{

let score = 0;

if(user?.name) score += 25;
if(user?.bio) score += 25;
if(user?.skillsOffered?.length > 0) score += 25;
if(user?.skillsWanted?.length > 0) score += 25;

return score;

};

const progress = completionScore();



/* tick checks */

const checks = {

name: !!user?.name,
bio: !!user?.bio,
offered: user?.skillsOffered?.length > 0,
wanted: user?.skillsWanted?.length > 0

};



/* missing fields */

const missingFields = [];

if(!user?.bio) missingFields.push("Add Bio");

if(!user?.skillsOffered?.length)
missingFields.push("Add Skills Offered");

if(!user?.skillsWanted?.length)
missingFields.push("Add Skills Wanted");



/* save profile */

const handleSubmit = async ()=>{

const result = await updateSkills({

userId:user._id,

skillsOffered: skillsOffered
? skillsOffered.split(",").map(s=>s.trim())
: user.skillsOffered,

skillsWanted: skillsWanted
? skillsWanted.split(",").map(s=>s.trim())
: user.skillsWanted,

bio: bio,

profilePic: profilePic

});

localStorage.setItem("user", JSON.stringify(result.user));

setShowPhotoInput(false);
setShowBioInput(false);

alert(result.message);

window.location.reload();

};



/* remove skills */

const removeSkillOffered = async (skillToRemove)=>{

const updatedSkills = user.skillsOffered.filter(
skill => skill !== skillToRemove
);

const result = await updateSkills({

userId:user._id,
skillsOffered: updatedSkills,
skillsWanted: user.skillsWanted,
bio:user.bio,
profilePic:user.profilePic

});

localStorage.setItem("user", JSON.stringify(result.user));

window.location.reload();

};



const removeSkillWanted = async (skillToRemove)=>{

const updatedSkills = user.skillsWanted.filter(
skill => skill !== skillToRemove
);

const result = await updateSkills({

userId:user._id,
skillsOffered: user.skillsOffered,
skillsWanted: updatedSkills,
bio:user.bio,
profilePic:user.profilePic

});

localStorage.setItem("user", JSON.stringify(result.user));

window.location.reload();

};



return(

<div className="layout">

<Sidebar/>

<div className="main-content">



{/* avatar */}

<div className="avatar">

{profilePic ?

<img src={profilePic} alt="profile"/>

:

user?.name?.charAt(0).toUpperCase()

}

</div>



<h3>Profile Photo</h3>

{!profilePic && (

<button onClick={()=>setShowPhotoInput(true)}>
Add Photo
</button>

)}

{profilePic && (

<button onClick={()=>setShowPhotoInput(!showPhotoInput)}>
Change Photo
</button>

)}

{showPhotoInput && (

<input
type="text"
placeholder="Paste image URL"
value={profilePic}
onChange={(e)=>setProfilePic(e.target.value)}
/>

)}



<h2>Profile</h2>



{/* progress */}

<div className="progress-container">

<p>
Profile Completion: {progress}%
</p>

<div className="progress-bar">

<div
className="progress-fill"
style={{width:`${progress}%`}}
>

</div>

</div>

</div>



{/* missing fields */}

{missingFields.length > 0 && (

<div className="missing-box">

<p><b>Complete profile to improve matches:</b></p>

<ul>

{missingFields.map((item,index)=>(
<li key={index}>{item}</li>
))}

</ul>

</div>

)}



{/* basic info */}

<p>

<b>Name:</b> {user?.name}

<span className={checks.name ? "tick" : "cross"}>
{checks.name ? " ✔" : " ✖"}
</span>

</p>



<p><b>Email:</b> {user?.email}</p>



{/* bio */}

<p>

<b>Bio</b>

<span className={checks.bio ? "tick" : "cross"}>
{checks.bio ? " ✔" : " ✖"}
</span>

</p>

<p>{user?.bio || "No bio added"}</p>

<button onClick={()=>setShowBioInput(!showBioInput)}>

{showBioInput ? "Cancel" : "Edit Bio"}

</button>



{showBioInput && (

<textarea
value={bio}
onChange={(e)=>setBio(e.target.value)}
rows="3"
/>

)}



{/* skills offered */}

<p>

<b>Skills Offered</b>

<span className={checks.offered ? "tick" : "cross"}>
{checks.offered ? " ✔" : " ✖"}
</span>

</p>

<div className="badge-container">

{user?.skillsOffered?.length ?

user.skillsOffered.map((skill,index)=>(

<span key={index} className="badge removable">

{skill}

<button
className="remove-skill"
onClick={()=>removeSkillOffered(skill)}
>
×
</button>

</span>

))

:

<p>No skills added</p>

}

</div>



{/* skills wanted */}

<p>

<b>Skills Wanted</b>

<span className={checks.wanted ? "tick" : "cross"}>
{checks.wanted ? " ✔" : " ✖"}
</span>

</p>

<div className="badge-container">

{user?.skillsWanted?.length ?

user.skillsWanted.map((skill,index)=>(

<span key={index} className="badge removable">

{skill}

<button
className="remove-skill"
onClick={()=>removeSkillWanted(skill)}
>
×
</button>

</span>

))

:

<p>No skills added</p>

}

</div>



<br/>



{/* add skills */}

<h3>Add Skills</h3>

<input
placeholder="Skills you can teach (comma separated)"
onChange={(e)=>setSkillsOffered(e.target.value)}
/>

<br/><br/>

<input
placeholder="Skills you want to learn (comma separated)"
onChange={(e)=>setSkillsWanted(e.target.value)}
/>

<br/><br/>



<button onClick={handleSubmit}>
Save Profile
</button>



<Footer/>

</div>

</div>

);

}

export default Profile;