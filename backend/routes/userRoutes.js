const express = require('express');
const router = express.Router();
const { loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile }
    = require('../controllers/userController.js');
const { protect } = require('../middleware/authMiddleware')

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router
    .route('/profil')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

module.exports = { router }; 
