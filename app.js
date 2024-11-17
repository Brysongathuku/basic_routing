const express = require("express");

//express app set up

const app = express();
//register view engine
app.set("view engine", "ejs");
// app.set('views','myViews');

// listen  for request
app.listen(3001, () => {
  console.log(" server is running");
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "yoshi finds eggs",
      snippet: "lorem ipsum dolor sit amet consecttur",
    },
    {
      title: "mario finds stars",
      snippet: "lorem ipsum dolor sit amet consecttur",
    },
    {
      title: "how to defeat bowsers",
      snippet: "lorem ipsum dolor sit amet consecttur",
    },
  ];
  // res.send('<p>home page</p>');
  res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// app.get('/blogs/create',(req,res)=>{
//   res.render('create');
// })
// 404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
