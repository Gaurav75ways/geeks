const mongoose = require('mongoose');

const userSchema = new  mongoose.Schema({
    googleId:{
        type:String,
    },
    firstname:{
        type:String,
        required:[true, 'Please enter your first name']
    },
    lastname:{
        type:String,
        required:[true, 'Please enter your last name']
    },
    email:{
        type:String,
    },
    email2:{
        type:String,
    },
    password:{
        type:String,
    },
    // agreement:{
    //     type:Boolean,
    //     required:[true, 'Please select the checkbox to continue']
    // },
    token:{
        type: String,
    }
},
{
    timestamps: true,
})

const User  = mongoose.model('user', userSchema);

module.exports = User;
