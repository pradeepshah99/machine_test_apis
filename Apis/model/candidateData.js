const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let schema = mongoose.Schema;

let candidate = new schema(
    {
        firstName : {type:String},
        lastName : {type:String},
        email: {type:String},
        password : {type:String},
        test1 : Number,
        test2 : Number,
        test3: Number

    },
    {
        collection: "candidate"
    }
    );

    candidate.pre('save', async function(next){
        try{
            //console.log("this is called");
            const salt = await bcrypt.genSalt(10);
            const hasedPassword = await bcrypt.hash(this.password, salt);
            this.password = hasedPassword;
            
            next();
        }
        catch(error){
            next(error);
        }
    });


    module.exports = mongoose.model('candidate', candidate);

