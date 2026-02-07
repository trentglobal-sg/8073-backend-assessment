const express = require('express');
const ejs = require('ejs');
require('dotenv').config();
const mysql2 = require('mysql2/promise')

const app = express();
app.set('view engine', 'ejs');  // tell Express that we are using EJS as our template engine
app.use(express.static('public'));

const dbConfig= {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
};

// create a new connection pool
const dbConnection = mysql2.createPool(dbConfig);

app.get('/test', async function(req,res){
    const luckyNumber = Math.floor(Math.random() * 10000 + 1);
   res.render('test', {
     "websiteTitle":"Puppy Love",
     "luckyNumber":luckyNumber
   });
});

app.get('/', async function(req,res){
  const sql = `SELECT * FROM food_entries`;
  // dbConnection.execute will return with an array of two elements:
  // index 0: row data (we want this)
  // index 1: meta data (we don't want)
  // we can use array destructuring to assign elements from an array
  // into a variable by the order of the variable in the array 
  // on the left hand size
  const [rows]= await dbConnection.execute(sql);
  
  res.render("index", {
    "foodEntries": rows
  })
})

app.listen(3000, function(){
    console.log("Server started")
})
