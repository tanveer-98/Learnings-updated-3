const jwt  = require('jsonwebtoken');
const User = require('../models/User')

const  auth  = async (req,res,next)=>{

    console.log('auth middleware')

    try{
        const token = req.header('Authorization').replace('Bearer ','');
        console.log(token);
        const decoded = jwt.verify(token,'thisismynewcourse')
        console.log(token);
        const user = await User.findOne({_id:decoded._id,"tokens.token":token})
        console.log(user)
        if(!user){
            throw new Error()
        }
        req.token = token;
        req.user = user;
        next(); 
    }   
    catch(e){
        res.status(401).send({error:'please authenticate'})
    }
}
module.exports = auth;