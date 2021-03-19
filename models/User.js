const {dbCon} = require("../configuration");
const {userValidator,logSchema} = require("../validator");
const {hashSync, compareSync} = require("bcryptjs");

class User{
    constructor(userData){
        this.userData = {...userData}
    }

    save(){
        dbCon("users",async(db)=>{
            try{
                const hashedPass = hashSync(this.userData['password'],12);
                this.userData['password'] = hashedPass;
                await db.insertOne(this.userData);
                console.log("data saved successfuly");
                cb();
            }catch(err){
                cb(err)
            }
            
            
        });
        
    }

    static validate(userData){  
        
        console.log("data saved successfuly");
        console.log(result.error.message);
        return userValidator.validate(userData);
      
    }

    checkExistence(){
        return new Promise((resolve,reject)=>{
            dbCon("users",async (db)=>{
                try{
                const user = await db.findOne({'$or':[{username:this.userData['username']},{
                    email:this.userData['email']
                }]});

                if(!user){
                    resolve({
                        check:false
                    })
                }else if(this.userData['username']===user.username){
                    resolve({
                        check:true,
                        message:'this username is already in use'
                    })
                }else if(this.userData['email']===user.email){
                    resolve({
                        check:true,
                        message: "this email is already in use"
                    });
                }
            }catch(err){
                reject(err);
            }
            })
        })
    }

    static login(userData){
        return new Promise((resolve,reject)=>{
          //validation
            const validation = logSchema.validate(userData);
            if(validation.error){
                const error = new Error(validation.error.message);
                error.statusCode = 400;
                return resolve(error);
            }

            dbCon("users",async (db)=>{
                try{
                    //find user
                    const user = await db.findOne({'$or':[{username:userData['userame']},
                    {email:userData['username']}]})
                    
                    if(!user || !compareSync(userData['password'],user.password)){
                        const error = new Error("Please enter valid username and password");
                        error.statusCode = 404;
                        return resolve(error)
                    }
                    resolve(user);

                    

                }catch(err){
                    reject(err)
                }
            })
        })
    }

}

const user = new User ({
    username:"sasybgs",
    email:"bgs@gmail.com",
    password:"Bgsassy-123!",
    first_name:"bgs",
    last_name:"sassy"
});

user.checkExistence()
.then(check=>{
    console.log(check);
})
.catch(err=>console.log(err))

module.exports = User;