var express                             = require("express"),
    app                             	= express(),
    bodyParser                      	= require("body-parser");

        // routes
var indexRoutes                 = require("./routes/index")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// section-container

app.use(indexRoutes);




// app.listen(process.env.PORT, process.env.IP, function(){
app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("-------------------------")
    console.log("portfolioproj server is running")
    console.log("-------------------------")
});





