const express= require('express');
const app= express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const router= require('./router');
app.use(router);


app.use('/public/images/', express.static('./public/images'));
app.use(express.static('public'));
app.set('views','views');
app.set('view engine','ejs');



const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function() {
    console.log("Server started.......");
  });
