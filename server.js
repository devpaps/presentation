'use strict';

const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/index.js');
const middleware = require('./middleware/index.js');

const url = `http://localhost:`;

app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));

let port = process.env.PORT || 5000;

app.use(middleware.incomingtoConsole);
app.use(express.static(path.join(__dirname + '/public')));

app.use('/', router);

app.listen(port, logStartUpDetailsToConsole);

function logStartUpDetailsToConsole() {
	let routes = [];

	// app._router för att få alla routes i express router
	app._router.stack.forEach((middleware) => {
		if (middleware.route) {
			// Routes registered directly on the app
			routes.push(middleware.route);
		} else if (middleware.name === 'router') {
			middleware.handle.stack.forEach((handler) => {
				let route;

				route = handler.route;
				route && routes.push(route);
			});
		}
	});
	console.info(`Server is listening on port ${url}${port}.`);
	console.info('Available routes are:');
	console.info(routes);
}
