import express from "express";
import bodyParser from "body-parser";
import wrap from "fast-word-wrap";

const port = 3000;
const app = express();
const cpl = 10;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" ,(req, res)=>{
    res.render("index.ejs"),{
        };
    });

app.get("/blog", (req, res) => {
    res.render("blog.ejs"), {};
});

app.post("/submit", (req, res) => {
    let blogText = req.body["blog-txt"]
    blogText = wrap(blogText, cpl);

    console.log(req.body["blog-txt"]);
    res.set('Content-Type', 'text/html;charset=utf-8');
    res.render("blogSubmited.ejs", {
        name: blogText
    });   
})


  

app.listen(port,() => {
    console.log(`server start on port: ${port}`);    
})

