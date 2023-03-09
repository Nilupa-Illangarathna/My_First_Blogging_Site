//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


// GloblalVariables
const PostsData=[];
// var arr =[  [date,[title,[posts]]]   ];


// instantiation express
const app = express();

//Pointing out that all the local files are in public folder
app.use(express.static("public"));

//Using Body Parser
app.use(bodyParser.urlencoded({extended: true}));

//Adding EJS to app project
app.set('view engine', 'ejs');

//Send html pages
// Home page
app.get("/",function(req,res){
    // res.render("homepage",{textVariable:HeaderVariable});
    res.render(
            "pages/home" ,
            {
                IndexesOfThePost:-1,
                HeaderOfThePage : HomeHeaderVariable,
                ArrayofPosts : PostsData,
            }
        );
})
// About page
app.get("/about",function(req,res){
    res.render("pages/about",
            {
                HeaderOfThePage : AboutHeaderVariable,
                StartingContent : AboutStartingContent
            }
        );
})
// Contact page
app.get("/contact",function(req,res){
    res.render("pages/about",
            {
                HeaderOfThePage : ContactHeaderVariable,
                StartingContent : ContactStartingContent
            }
        );
})
// Compose page
app.get("/compose",function(req,res){
    res.render("pages/compose",
            {
                HeaderOfThePage : ComposeHeaderVariable,
            }
        );
})

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//To use any post request/////////////////////////
app.get("/posts/:newPost",function(req,res){
    // res.render("homepage",{textVariable:HeaderVariable});
    console.log(typeof(req.params.newPost));
    res.render(
        "pages/home" ,
        {
            IndexesOfThePost:Number(req.params.newPost),
            HeaderOfThePage : "Homeworks",
            ArrayofPosts : PostsData,
        }
    );
})
// app.get("/posts/:newPost/:secondPost",function(req,res){
//     console.log(req.params.newPost);
//     console.log(req.params.secondPost);
// })
//////////////////////////////////////////////////
//////////////////////////////////////////////////





//get responses from html pages
// Home page
app.post("/",function(req,res){
    HeaderVariable=req.body.input01;
    res.redirect("/")
})
//About page
app.post("/about",function(req,res){
})
// Contact page
app.post("/contact",function(req,res){
})
// Compose page


app.post("/compose",function(req,res){
    if(req.body.title!=="" && req.body.content!=="" && req.body.date!==""){
        if(PostsData.length!==0){
            var dateCheck=false;
            for(let i=0;i<PostsData.length;i++){
                if(PostsData[i][0]===req.body.date){
                    var titleCheck=false;
                    for(let j=0;j<PostsData[i].length;j++){
                    if(PostsData[i][j][0]===req.body.title){
                        PostsData[i][j].push(req.body.content);
                        console.log("yes");
                        titleCheck=true;
                    }
                    }
                    if(!titleCheck){
                        console.log("no");
                        PostsData[i].push([req.body.title,req.body.content]);
                    }
                    dateCheck=true;
                }
            }
            if(!dateCheck){
                console.log("no");
                PostsData.push([req.body.date,[req.body.title,req.body.content]]);
            }
        }
        else{
            console.log("no");
            PostsData.push([req.body.date ,[req.body.title , req.body.content]]);
        }
    }
    console.log(PostsData);
}
)

//making port 3000 listen for this web page
app.listen(3000,function(){
    console.log("Server created on port 3000");
})



// Variables for EJS
let HomeHeaderVariable="Home";
let AboutHeaderVariable="About";
let ContactHeaderVariable="Contact";
let ComposeHeaderVariable="Compose";
//Data For passing
const HomeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis turpis ac turpis dictum, a commodo erat venenatis. Etiam et rutrum odio. Etiam justo magna, efficitur varius euismod nec, gravida dapibus nibh. Duis dictum tincidunt nisl eget ultricies. In a neque quis orci efficitur blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mi eros, maximus eget sollicitudin ac, maximus sed sem. In malesuada dolor a suscipit venenatis. Praesent posuere velit et turpis sodales tristique. Cras posuere orci nunc, a pulvinar arcu rhoncus in. Vestibulum consectetur molestie justo, tempor posuere quam sodales eget. Fusce semper varius suscipit. Aenean convallis quam id dui condimentum, rutrum rhoncus neque tincidunt. Vestibulum ornare viverra tincidunt. Aenean lectus erat, tincidunt quis arcu in, aliquet pharetra massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis turpis ac turpis dictum, a commodo erat venenatis. Etiam et rutrum odio. Etiam justo magna, efficitur varius euismod nec, gravida dapibus nibh. Duis dictum tincidunt nisl eget ultricies. In a neque quis orci efficitur blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mi eros, maximus eget sollicitudin ac, maximus sed sem. In malesuada dolor a suscipit venenatis. Praesent posuere velit et turpis sodales tristique. Cras posuere orci nunc, a pulvinar arcu rhoncus in. Vestibulum consectetur molestie justo, tempor posuere quam sodales eget. Fusce semper varius suscipit. Aenean convallis quam id dui condimentum, rutrum rhoncus neque tincidunt. Vestibulum ornare viverra tincidunt. Aenean lectus erat, tincidunt quis arcu in, aliquet pharetra massa.";
const AboutStartingContent = "I am a Computer Engineering Undergraduate who is specializing Data Management minor field at the Faculty of Engineering University of Sri Jayewardenepura. Interested about computer technologies such as Android Development, Data science, Full-stack development(Flutter with dart), Machine learning, Artificial intelligence, Computer and information Security and Game development. A fast learner and interested in learning and exploring new things. I highly believe Pushing my limits is the best way of exploring the computer science field.";
const ContactStartingContent ="Velit euismod in pellentesque massa placerat duis ultricies lacus. In aliquam sem fringilla ut morbi tincidunt augue interdum. Metus aliquam eleifend mi in. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Pellentesque elit ullamcorper dignissim cras tincidunt. Tellus pellentesque eu tincidunt tortor. Sapien eget mi proin sed libero enim sed. Neque egestas congue quisque egestas diam in arcu cursus euismod. Feugiat pretium nibh ipsum consequat nisl vel. Nisi est sit amet facilisis magna etiam tempor orci. Posuere ac ut consequat semper viverra nam.";





