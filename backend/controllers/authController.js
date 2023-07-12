const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken')
const { User } = require("../db")


// Accés public
// Auth user/set token
// GET /api/users/login
const loginUser = asyncHandler(async (req, res) => {
    
    try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.status(200).json({
            id: user.id,
            firstname: user.FirstName,
            lastname: user.LastName,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user.id)
        });

    } else {
        res.status(401);
        throw new Error("Email ou mot de passe de invalides")
    }
} catch (error) {
    res.status(500).json({ message: error.message });
}
})

// Accés public
// POST /api/users/register
const registerUser = asyncHandler(async (req, res) => {

    try {
    const { Lastname, Firstname, Email, Password } = req.body;
    // const userExists = await User.findOne({ Email });

    // if (userExists) {
    //     res.status(400);
    //     throw new Error("L'utilisateur existe déja");
    // }

    const user = await User.create({
        Firstname,
        Lastname,
        Email,
        Password
    });

    if (user) {
        res.status(201).json({
            id: user.id,
            Firstname: user.Firstname,
            Email: user.Email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        });
    } else {
        res.status(422);
        throw new Error("Données invalides")
    }
} catch (error) {
    res.status(500).json({ message: error.message });
}
})


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
  





module.exports = { loginUser, registerUser, logoutUser, test}; 