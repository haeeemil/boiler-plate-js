const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1   // true
    },
    password: {
        type: String,
        minlength: 6
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function (next) {
    var user = this;

    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err){
            return next(err);
        }
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) {
                return next(err);
            } else {
                user.password = hash
            }
        })
    })
})

const User = mongoose.model('User', userSchema)

module.exports = {User}