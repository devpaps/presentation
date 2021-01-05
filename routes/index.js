'use strict';

const express = require('express');
const router = express.Router();
const matter = require('gray-matter');
const fs = require('fs');

router.get('/', (req, res) => {
  res.render('index')
});

router.get('/kontakt', (req, res) => {
	res.render('kontakt');
});

router.get('/projekt', (req, res) => {
	res.render('projekt');
});

// blog.ejs
router.get('/blog', (req, res) => {
	try {
    const posts = fs
    .readdirSync('./blog')
    .filter((file) => file.endsWith('.md'));
    res.render('blog', {
      posts: posts,
      matter: matter,
      //title: file.data.title'
    });
  } catch (e) {
    console.log(e);
  }
});

// post.ejs
router.get('/blog/:article', (req, res) => {
	const file = matter.read('./blog/' + req.params.article + '.md');

	// use markdown-it to convert content to HTML
	var md = require('markdown-it')({
		html: true
	});
	let content = file.content;
	var result = md.render(content);
	console.log(result);
	res.render('posts', {
		post: result,
		author: file.data.author,
		title: file.data.title,
		date: file.data.date,
		description: file.data.description,
		slug: req.params.article,
		image: file.data.image,
	});
});

module.exports = router;
