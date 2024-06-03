const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passpoortLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    email:{
        type: String,
        required:true,
    }
});

userSchema.plugin(passpoortLocalMongoose);

module.exports = mongoose.model("User", userSchema);