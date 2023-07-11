// const asyncHandler = require('express-async-handler');
// const jwt = require('jsonwebtoken')
// const { User } = require("../db/models/user.model")

// // Accés public
// // Auth user/set token
// // GET /api/users/login
// const loginUser = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (user && (await user.matchPassword(password))) {
//         res.status(201).json({
//             _id: user._id,
//             name: user.name,
//             username: user.username,
//             email: user.email,
//             isAdmin: user.isAdmin,
//             token: generateToken(user._id)
//         });

//     } else {
//         res.status(401);
//         throw new Error("Email ou mot de passe de invalides")
//     }

// })

// // Accés public
// // POST /api/users/register
// const registerUser = asyncHandler(async (req, res) => {
//     const { name, email, password, username, confirm_password } = req.body;

//     if (password !== confirm_password) {
//         return res.status(400).json({
//             msg: "Les mots de passe ne sont pas identiques"
//         });
//     }

//     const userExists = await User.findOne({ email });

//     if (userExists) {
//         res.status(400);
//         throw new Error("L'utilisateur existe déja");
//     }

//     const user = await User.create({
//         name,
//         username,
//         email,
//         password
//     });

//     if (user) {
//         res.status(201).json({
//             _id: user._id,
//             name: user.name,
//             username: user.username,
//             email: user.email,
//             isAdmin: user.isAdmin,
//             token: generateToken(user._id)
//         });
//     } else {
//         res.status(400);
//         throw new Error("Données invalides")
//     }

// })


// const getUserProfile = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user._id);

//     if (user) {
//         res.json({
//             _id: user._id,
//             username: user.username,
//             name: user.name,
//             email: user.email,
//             isAdmin: user.isAdmin,
//         });
//     } else {
//         res.status(404);
//         throw new Error('Utilisateur non trouvé');
//     }
// });

// // Accés public
// // POST /api/users/logout
// // const logoutUser = asyncHandler(async (req, res) => {
// //     res.cookie('jwt', '', {
// //         httpOnly: true,
// //         expires: new Date(0),
// //     })

// //     res.status(200).json({ message: 'Deconnexion Utilisateur' });
// // })

// // Accés privé
// // GET /api/users/profil



// // Accés privé
// // PUT /api/users/profil
// const updateUserProfile = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user._id);

//     if (user) {
//         user.name = req.body.name || user.name;
//         user.username = req.body.username || user.username;
//         user.email = req.body.email || user.email;

//         if (req.body.password) {
//             user.password = req.body.password;
//         }

//         const updateUser = await user.save();
//         res.status(200).json({
//             _id: updateUser._id,
//             name: updateUser.name,
//             username: updateUser.username,
//             email: updateUser.email,
//         });

//     } else {
//         res.status(404);
//         throw new Error("Utilisateur non trouvé")
//     }
// })

// // @desc    Get all users
// // @route   GET /api/users
// // @access  Private/Admin
// const getUsers = asyncHandler(async (req, res) => {
//     const users = await User.find({});
//     res.json(users);
// });

// // @desc    Get user by ID
// // @route   GET /api/users/:id
// // @access  Private/Admin
// const getUserById = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id).select('-password');
//     if (user) {
//         res.json(user);
//     } else {
//         res.status(404);
//         throw new Error('User non trouvé');
//     }
// });

// // @desc    Update user
// // @route   PUT /api/users/:id
// // @access  Private/Admin
// const updateUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id);

//     if (user) {
//         user.username = req.body.username || user.username;
//         user.name = req.body.name || user.name;
//         user.email = req.body.email || user.email;
//         user.isAdmin = Boolean(req.body.isAdmin);

//         if (req.body.password) {
//             user.password = req.body.password;
//         }


//         const updatedUser = await user.save();

//         res.json({
//             _id: updatedUser._id,
//             username: updatedUser.username,
//             name: updatedUser.name,
//             email: updatedUser.email,
//             isAdmin: updatedUser.isAdmin,
//         });
//     } else {
//         res.status(404);
//         throw new Error('User non trouvé');
//     }
// });

// // @desc    Delete user
// // @route   DELETE /api/users/:id
// // @access  Private/Admin
// const deleteUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id);

//     if (user) {
//         if (user.isAdmin) {
//             res.status(400);
//             throw new Error('Can not delete admin user');
//         }
//         await User.deleteOne({ _id: user._id });
//         res.json({ message: 'User removed' });
//     } else {
//         res.status(404);
//         throw new Error('User non trouvé');
//     }
// });

// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, {
//         expiresIn: '30d'
//     })
// }

// module.exports = { loginUser, registerUser, getUserProfile, updateUserProfile, getUserById, updateUser, getUsers, deleteUser };