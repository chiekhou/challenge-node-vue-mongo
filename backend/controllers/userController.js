const asyncHandler = require('express-async-handler');

// Accés public
// Auth user/set token
// GET /api/users/auth
const authUser = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Authentification User' });
})

// Accés public
// POST /api/users
const registerUser = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Enregistrement Utilisateur' });
})

// Accés public
// POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Deconnexion Utilisateur' });
})

// Accés privé
// GET /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Profil utilisateur' });
})

// Accés privé
// GET /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Mise à jour utilisateur profile' });
})

module.exports = { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }; 