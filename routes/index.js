const authRouter  = require("./auth");
const movieRouter = require("./movie")

module.exports = (app)=>{
    app.use("/auth",authRouter)
    app.use(movieRouter);
    
    // app.get("/",(req,res,next)=>{
    //     res.send("Welcome to the home page");
        
    // });

    // app.get("/users/:id",(req,res,next)=>{
    //     const host = req.get("Host");
    //     console.log("Host: "+host);
    //     res.send("Welcome to the users page")
    // });
}