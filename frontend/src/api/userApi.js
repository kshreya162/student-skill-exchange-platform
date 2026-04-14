const BASE_URL = "http://localhost:5000/api/users";

/* signup */
export const signupUser = async (userData) => {

    const response = await fetch(`${BASE_URL}/signup`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(userData)

    });

    return response.json();

};


/* login */
export const loginUser = async (userData) => {

    const response = await fetch(`${BASE_URL}/login`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(userData)

    });

    return response.json();

};

export const updateSkills = async (data) => {

    const response = await fetch("http://localhost:5000/api/users/skills", {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    return response.json();

};

export const searchUsers = async (skill) => {

    const response = await fetch(`http://localhost:5000/api/users/search?skill=${skill}`);

    return response.json();

};

export const getSkillMatches = async (userId)=>{

const response = await fetch(

`http://localhost:5000/api/users/matches/${userId}`

);

return response.json();

};