const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const generateToken = require('../jwt/token');

//Register a new user @route /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, email2, password, password2 } = req.body;
  console.log(req.body);
  //checking for empty data fields
  if (!firstname || !lastname || !email || !email2 || !password || !password2 ) {
    res.status(400);
    throw new Error('please enter all fields');
  }

  if(password!==password2){
    throw new Error('Passwords do not match');
  }

  //check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  //hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //creating a user
  const user = await User.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    // agreement,
  });

  if (user) {
    //upon successful creation of user
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      // agreement:user.agreement,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('invalid user data');
  }
});

//login a user @route /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  //match password and user
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      // agreement: user.agreement,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

//userinfo route /api/users/me
const getMe = asyncHandler(async (req, res) => {
  const userDetails = {
    id: req.user._id,
    name: req.user.firstname + ' ' + req.user.lastname,
    email: req.user.email,
  };
  res.status(200).json(userDetails);
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
