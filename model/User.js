let User= function(data){
this.data=data
this.errors=[]
};

User.prototype.validate= function(){

    if(this.data.username == ""){

    this.errors.push("Please type in a username")};

    if(this.data.password == ""){

        this.errors.push("Please type in a password")};

}

User.prototype.register= function() {

   this.validate(); 
};


module.exports=User;