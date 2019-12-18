const express= require('express');

const router= express.Router();
const loginController= require('./controllers/loginController');

router.get('/', loginController.home);

router.post('/registration', loginController.register);

router.post('/login', loginController.login);

router.get('/about', function(req,res){

    res.send("this router works");
})

module.exports=router;

