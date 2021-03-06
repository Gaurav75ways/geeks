const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      //get token from header
      token = req.headers.authorization.split(' ')[1]; //formatted as Bearer<space>required token, we'll split it into array at space and since the array is 0 indexed we can acces the token at index 1

      //verify token on server
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      //get user from token
      req.user = await User.findById(decoded.id).select('-password'); //exclude the password from the returned data

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Unauthorized');
    }
  }

  // if there's no token
  if (!token) {
    res.status(401);
    throw new Error('Unauthorized');
  }
});
module.exports = { protect };
