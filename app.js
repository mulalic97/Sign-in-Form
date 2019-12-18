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


app.listen(3000);