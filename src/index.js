var helloTest = require('./helloTest');
require("./style.css");

const app = document.createElement('div');

document.body.appendChild(app);
app.appendChild(helloTest());
