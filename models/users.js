var mongoose = require("mongoose");

var schema= mongoose.Schema;
var  userSchema= new schema ({
    email: String,
    password: String,
})
module.exports= mongoose.model('user',userSchema,'userinfo');