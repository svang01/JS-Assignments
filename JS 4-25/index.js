// Create an index.js file and update package.json so that npm start will run it
console.log("hello");

// Require or import the 'moment' modules in your application.
const Moment = require('moment');

const a = new Moment();
console.log(a.format('h:mm:ss a'));