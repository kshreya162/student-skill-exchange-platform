const express = require("express");

const router = express.Router();

const {

sendRequest,
getRequests,
updateRequestStatus,
getSentRequests

} = require("../controllers/requestController");


router.post("/send", sendRequest);

/* sent requests route must come before :userId */
router.get("/sent/:userId", getSentRequests);

router.get("/:userId", getRequests);

router.put("/status", updateRequestStatus);

module.exports = router;