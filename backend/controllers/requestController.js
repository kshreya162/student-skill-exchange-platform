const Request = require("../models/Request");

/* send request */
exports.sendRequest = async (req, res) => {

    try {

        const { sender, receiver, skill, message } = req.body;

        /* prevent sending request to yourself */
        if(sender === receiver){

            return res.json({
                message: "You cannot send request to yourself"
            });

        }

        /* prevent duplicate request */
        const existingRequest = await Request.findOne({
            sender,
            receiver,
            skill
        });

        if(existingRequest){

            return res.json({
                message: "Request already sent"
            });

        }

        /* create new request */
        const request = await Request.create({
            sender,
            receiver,
            skill,
            message
        });

        res.json({
            message: "Request sent successfully",
            request
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

/* get received requests */
exports.getRequests = async (req, res) => {

    try {

        const { userId } = req.params;

        const requests = await Request.find({
            receiver: userId
        }).populate("sender", "name email");

        res.json(requests);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

/* update request status */

exports.updateRequestStatus = async (req,res)=>{

try{

const { requestId, status } = req.body;

const request = await Request.findByIdAndUpdate(

requestId,

{ status },

{ new:true }

);

res.json({

message:"Request updated",

request

});

}catch(error){

res.status(500).json({

error:error.message

});

}

};

/* get sent requests */

exports.getSentRequests = async (req,res)=>{

try{

const { userId } = req.params;

const requests = await Request.find({

sender:userId

}).populate("receiver","name email");

res.json(requests);

}catch(error){

res.status(500).json({

error:error.message

});

}

};