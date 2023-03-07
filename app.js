//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// instantiation express
const app = express();

//Pointing out that all the local files are in public folder
app.use(express.static("public"));

//Using Body Parser
app.use(bodyParser.urlencoded({extended: true}));

//Adding EJS to app project
app.set('view engine', 'ejs');

//send html pages
app.get("/",function(req,res){
    // res.render("homepage",{textVariable:HeaderVariable});
    res.render(
            "pages/home" ,
            {
                HeaderOfThePage:HeaderVariable,
                StartingContent: HomeStartingContent
            }
        );
})

//get responses from html pages
app.post("/",function(req,res){
    HeaderVariable=req.body.input01;
    res.redirect("/")
})

//making port 3000 listen for this web page
app.listen(3000,function(){
    console.log("Server created on port 3000");
})



// Variables for EJS
let HeaderVariable="Home";
//Data For passing
const HomeStartingContent ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis turpis ac turpis dictum, a commodo erat venenatis. Etiam et rutrum odio. Etiam justo magna, efficitur varius euismod nec, gravida dapibus nibh. Duis dictum tincidunt nisl eget ultricies. In a neque quis orci efficitur blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mi eros, maximus eget sollicitudin ac, maximus sed sem. In malesuada dolor a suscipit venenatis. Praesent posuere velit et turpis sodales tristique. Cras posuere orci nunc, a pulvinar arcu rhoncus in. Vestibulum consectetur molestie justo, tempor posuere quam sodales eget. Fusce semper varius suscipit. Aenean convallis quam id dui condimentum, rutrum rhoncus neque tincidunt. Vestibulum ornare viverra tincidunt. Aenean lectus erat, tincidunt quis arcu in, aliquet pharetra massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis turpis ac turpis dictum, a commodo erat venenatis. Etiam et rutrum odio. Etiam justo magna, efficitur varius euismod nec, gravida dapibus nibh. Duis dictum tincidunt nisl eget ultricies. In a neque quis orci efficitur blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mi eros, maximus eget sollicitudin ac, maximus sed sem. In malesuada dolor a suscipit venenatis. Praesent posuere velit et turpis sodales tristique. Cras posuere orci nunc, a pulvinar arcu rhoncus in. Vestibulum consectetur molestie justo, tempor posuere quam sodales eget. Fusce semper varius suscipit. Aenean convallis quam id dui condimentum, rutrum rhoncus neque tincidunt. Vestibulum ornare viverra tincidunt. Aenean lectus erat, tincidunt quis arcu in, aliquet pharetra massa.";