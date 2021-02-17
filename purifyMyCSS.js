const purify = require('purify-css');

let content = ['**/views/*.ejs'];
let css = ['**/public/css/bulma.min.css', '**/public/css/dracula.css'];
let options = {
	minify: true,
	whitelist: [
		'*navbar*',
		'image',
		'is-64x64',
		'is-square',
		'is-hidden-touch',
		'media-left',
		'has-text-weight-normal',
	],
	info: true,
	output: 'public/css/output.css',
};
purify(content, css, options, (purifiedAndMinifiedResult) => {
	console.log(purifiedAndMinifiedResult);
});
