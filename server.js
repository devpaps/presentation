const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();
const fs = require('fs');

app.set('view engine', 'ejs')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
let port = process.env.PORT || 5000;

//app.use('/artiklar', articleRouter)
app.use('/css',express.static(__dirname + '/public/css'));
app.use('/js',express.static(__dirname + '/public/js'));
app.use('/modules',express.static(__dirname + '/public/js/modules'));
app.use('/images',express.static(__dirname + '/public/images'));


app.get('/', (req, res) => {
  res.render('index');
})

app.get('/kontakt', (req, res) => {
  res.render('kontakt');
})

app.get('/projekt', (req, res) => {
  res.render('projekt');
})

// blog.ejs
app.get("/blog", (req, res) => {
  const posts = fs.readdirSync(__dirname + '/blog').filter(file => file.endsWith('.md'));
  
  res.render("blog", {
    posts: posts,
    matter: matter
    //title: file.data.title
  });
});

// post.ejs
app.get('/blog/:article', (req, res) => {
  const file = matter.read(__dirname + '/blog/' + req.params.article + '.md');
  
    // use markdown-it to convert content to HTML
    var md = require("markdown-it")();
    let content = file.content;
    var result = md.render(content);
    console.log(result);
    res.render("posts", {
      post: result,
      title: file.data.title,
      date: file.data.date,
      description: file.data.description,
      slug: req.params.article,
      image: file.data.image
    });
})


//router.use('/artiklar', articleRouter);

const matter = require('gray-matter');

app.listen(port);