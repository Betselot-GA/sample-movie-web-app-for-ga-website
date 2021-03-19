const {User} = require("../../models")
const createError = require("http-errors")

const getSignup = (req,res,next)=>{
    res.send("Welcome to signup page");
}

const postSignup = (req,res,next)=>{
    //validation
   const validation = User.validate(req.body);
   if(validation.error){
       const error = new Error(validation.error.message);
       error.statusCose = 400;
       return next(error);
   }

   //check existence
   const user = new User(req.body);
   user.checkExistence()
   .then(result=>{
       if(result.check){
           const error = new Error(result.message)
           error.statusCose = 409;
           return next(error);
       }

       user.save((err)=>{
           if(err){
               return next(createError(500))
           }

           res.status(201).json({
               message:"User has been successsfully created."
           })
       })
   })
   .catch(err=>next(createError(500)));
}

module.exports = {
    getSignup,
    postSignup
}