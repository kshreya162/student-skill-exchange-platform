const express = require("express");

const router = express.Router();

const {

signup,
login,
updateSkills,
searchUsers,
getSkillMatches

} = require("../controllers/userController");


router.post("/signup", signup);

router.post("/login", login);

router.put("/skills", updateSkills);

/* search must come before matches */
router.get("/search", searchUsers);

router.get("/matches/:userId", getSkillMatches);


module.exports = router;