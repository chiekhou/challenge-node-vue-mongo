const express = require('express');
const router = express.Router();
const { loginUser,
    registerUser,
    deleteUser,
    getUserById,
    updateUser,
    getUsers,
    // logoutUser,
    getUserProfile,
    updateUserProfile }
    = require('../controllers/userController.js');
const { protect, admin } = require('../middleware/authMiddleware')

router.post('/login', loginUser);
router.route('/').post(registerUser).get(protect, admin, getUsers);
// router.post('/logout', logoutUser);
router
    .route('/profil')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser);

module.exports = { router }; 
