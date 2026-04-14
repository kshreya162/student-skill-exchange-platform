const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* signup */
exports.signup = async (req, res) => {
    try {

        const { name, email, password, bio } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            bio
        });

        res.status(201).json({
            message: "User registered",
            user
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};


/* login */
exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            message: "Login successful",
            token,
            user
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

/* update skills */
exports.updateSkills = async (req, res) => {
    try {

        const { userId, skillsOffered, skillsWanted } = req.body;

        const user = await User.findByIdAndUpdate(
            userId,
            {
                skillsOffered,
                skillsWanted
            },
            { new: true }
        );

        res.json({
            message: "Skills updated",
            user
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

/* search users by skill */
exports.searchUsers = async (req, res) => {
    try {

        const { skill } = req.query;

        const users = await User.find({
            skillsOffered: { $regex: skill, $options: "i" }
        });

        res.json(users);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

/* skill match suggestions */

exports.getSkillMatches = async (req,res)=>{

try{

const { userId } = req.params;

const currentUser = await User.findById(userId);

const matches = await User.find({

skillsOffered: { $in: currentUser.skillsWanted },

_id: { $ne: userId }

});

res.json(matches);

}catch(error){

res.status(500).json({

error:error.message

});

}

};