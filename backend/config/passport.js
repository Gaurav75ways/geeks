const GoogleStrategy = require('passport-google-oauth2').Strategy
const mongoose = require('mongoose')
const User = require('../models/userModel')

module.exports = function(passport){
    passport.use(
        new GoogleStrategy({
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:5000/google/callback' //fix this url, store it in env
    },
    async(accessToken, refreshToken, profile, done)=>{
        const newUser = {
            googleId: profile.id,
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
          }
          //storing data in db
          try {
            let user = await User.findOne({ googleId: profile.id })
  
            if (user) {
              done(null, user)
            } else {
              user = await User.create(newUser)
              done(null, user)
            }
          } catch (err) {
            console.error(err)
          }

        console.log(profile);
        }
    ))

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
          User.findById(id, (err, user)=> done(err, user))
      });
}

