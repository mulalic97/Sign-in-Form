const User = require ('../model/User');

module.exports= {

home: function(req,res){

res.render('index');

},

login:function(req,res){

    res.send("Logged in")



},

logout:function(){



},

register:function(req,res){
    let user= new User(req.body);

    user.register()

   if(user.errors.length){
res.send(user.errors);
   } else{

res.send("All is good")
   }


}
}