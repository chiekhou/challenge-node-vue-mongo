const asyncHandler = require('express-async-handler');
const { generateToken } = require('../utils/generateToken')
const { User } = require("../models/userModel")

// Accés public
// Auth user/set token
// GET /api/users/auth
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(401);
        throw new Error("Email ou mot de passe de invalides")
    }

})

// Accés public
// POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("L'utilisateur existe déja");
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error("Données invalides")
    }

})

// Accés public
// POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    })

    res.status(200).json({ message: 'Deconnexion Utilisateur' });
})

// Accés privé
// GET /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
    // console.log(req.user);
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,

    }
    res.status(200).json(user);
})

// Accés privé
// GET /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updateUser = await user.save();
        res.status(200).json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
        });

    } else {
        res.status(404);
        throw new Error("Utilisateur non trouvé")
    }
})

module.exports = { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }; 