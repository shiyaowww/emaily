//Created by: Shiyao Wang
//Sep 18, 2020

const express = require("express");
const app = express(); //generate a new app that represent a running express app

app.get("/", (req, res) => {
    res.send({hi:"there"});
}); //execute a route handler with express

const PORT = process.env.PORT || 5000; //default if no env_var in Heroku
app.listen(PORT);
//app: Express App to register this route handler with
//get: creae new route handler that whatch for incoming http request with this method
//express have access to get, post, put, delete, patch methods, all of them accociated with some intent
// /:watch for requests tring to access "/" 
//req: request, js object representing incoming request
//res: response, data about to be sent back to whoever made the incoming request
//body of the function, res.send({})immediatedly send some JSON back to who ever made this request
//app.listen（）: instruct express to tell node that it wants to listen for incoming traffic on port 5000


