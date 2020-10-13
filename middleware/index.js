"use strict";

function incomingtoConsole(req, res, next) {
  console.info(`Got request on ${req.path} (${req.method}).`);
  // Next to call in chain of middleware.
  next();
}

module.exports = {
  incomingtoConsole: incomingtoConsole
}