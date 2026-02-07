const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');  // tell Express that we are using EJS as our template engine
app.use(express.static('public'));


app.get('/test', async function(req,res){
    const luckyNumber = Math.floor(Math.random() * 10000 + 1);
   res.render('test', {
     "websiteTitle":"Puppy Love",
     "luckyNumber":luckyNumber
   });
});

app.listen(3000, function(){
    console.log("Server started")
})
