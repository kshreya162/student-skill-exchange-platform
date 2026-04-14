export const sendRequest = async (data) => {

    const response = await fetch("http://localhost:5000/api/requests/send", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    return response.json();

};

export const getRequests = async (userId) => {

    const response = await fetch(`http://localhost:5000/api/requests/${userId}`);

    return response.json();

};

export const updateRequestStatus = async (data)=>{

const response = await fetch(

"http://localhost:5000/api/requests/status",

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body: JSON.stringify(data)

}

);

return response.json();

};

export const getSentRequests = async (userId)=>{

const response = await fetch(

`http://localhost:5000/api/requests/sent/${userId}`

);

return response.json();

};