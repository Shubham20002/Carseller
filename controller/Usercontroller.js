const User=require('../models/user');
module.exports.createuser=async function(req,res){
    console.log(req.body.email);
   const  user= await User.findOne({email:req.body.email});

   
      //if user is not present in db then it will added in db
        if(!user){
           User.create(req.body);
              
        //  return res.status(200).json({
        //     message:"user added successfully",
        //     userdetails:user
        //  })
        return res.send("user added successfully");
         
           
        }
        //if user is already present then it will back to same page
        else{
            // return res.status(200).json({
            //     message:"user already present",
            //     userdetails:user})
            return res.send("user already added");
        }
     }


     module.exports.cretesession= async function(req,res){
        try{
            console.log(req.body);
            let user = await User.findOne({email: req.body.email});
    
            if (!user || user.password != req.body.password){
                return res.json(422, {
                    message: "Invalid username or password"
                });
            }
    
            return res.json(200, {
                message: 'Sign in successful, here is your token, please keep it safe!',
                // data:  {
                //     token: jwt.sign(user.toJSON(), 'codeial', {expiresIn:  '1000000'})
                // }
            })
    
        }catch(err){
            // console.log('********', err);
            return res.json(500, {
                message: "Internal Server Error"
            });
        }
     }