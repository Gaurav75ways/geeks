const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const {errorHandler} = require('./middleware/errorMiddleware');
const cors = require("cors");
const passport = require('passport');
const session = require('express-session')

//connect to database
connectDB();

//passport config
require('./config/passport')(passport);

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

const app = express();
app.use(cors())
app.use(express.json()); //bodyparser
app.use(express.urlencoded({ extended: false }));


//session
app.use(session({ secret:process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//root url
app.get('/',(req,res)=>{
    res.json({message:"welcome to the geek spotters server"})
});

//this is duplicated must be removed
app.get('/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/failure'
  })
);

app.get('/auth/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

//protected
app.get('/dashboard', isLoggedIn, (req,res)=>{
  res.redirect("http://localhost:5001/Dashboard")
})

//logout
app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`server on port ${PORT}`));
