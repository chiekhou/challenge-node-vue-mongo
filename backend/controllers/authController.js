const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken')
const { User } = require("../db")
const bcrypt = require('bcrypt');



// Accés public
// Auth user/set token
// GET /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { Email, Password } = req.body;

  try {
    if (!Email || !Password) {
      res.status(400);
      throw new Error("Email et mot de passe sont requis");
    }

    const user = await User.findOne({ where: { Email: Email } });

    if (!user) {
      res.status(401);
      throw new Error("Email ou mot de passe invalides");
    }

    bcrypt.compare(Password, user.Password, (err, isMatch) => {
      if (err) {
        res.status(400);
        throw new Error("Erreur de comparaison des mots de passe");
      }

      if (isMatch) {
        res.status(200).json({
          id: user.id,
          FirstName: user.FirstName,
          LastName: user.LastName,
          Email: user.Email,
          isAdmin: user.isAdmin,
          //token: generateToken(user.id),
        });
      } else {
        res.status(401);
        throw new Error("Email ou mot de passe invalides");
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Accés public
// POST /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password } = req.body;
    const userExists = await User.findOne({ where: { Email: Email } });

    if (userExists) {
      res.status(400);
      throw new Error("L'utilisateur existe déjà");
    }

    const trimmedPassword = Password.trim(); 
    const hashedPassword = await bcrypt.hash(trimmedPassword, 10); 


    const user = await User.create({
      FirstName,
      LastName,
      Email,
      Password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        id: user.id,
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(422);
      throw new Error("Données invalides");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Accés public
// POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) => {
    try {
      res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
      });
  
      res.status(200).json({ message: 'Déconnexion Utilisateur' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  const test = asyncHandler(async (req, res) => {
    try {
      res.send('Hello World');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}



module.exports = { loginUser, registerUser, logoutUser, test}; 