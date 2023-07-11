const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerUser, logoutUser, loginUser,test} = require('../controllers/authController');


// Route d'inscription 
router.post('/register',registerUser);
  

// Route de connexion
router.post('/login',loginUser);

router.post('/test',test);

// Route de deconnexion
router.post('/logout',logoutUser);


// // Exemple de route protégée nécessitant une authentification et un rôle administrateur
// router.get('/admin/protected', admin, (req, res) => {
//     res.json({ message: 'Route protégée pour les administrateurs' });
//   });
  


  module.exports = router;
  