const mongoose = require("mongoose");


const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        
        password: {
           type : String,
           required : true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname : {
            type: String,
            required : true
        },
        isAdmin : {
            type: Boolean,
            delete : false
        },
        profilePicture: String,
        coverPicture : String,
        about : String,
        livesin : String,
        worksAt : String,
        relationship : String,
        country : String,
        followers : [],
        following : []

        
    },
    {timestamps : true}
)

const UserModel = mongoose.model("Users",UserSchema);
module.exports= UserModel