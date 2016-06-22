var nowMesssage = require('./nowMessage')

module.exports = function () {
  const helloMesssage = document.createElement('h1');
  helloMesssage.innerHTML = "Test: Hello World!";
  helloMesssage.appendChild(nowMesssage());
  return helloMesssage;
};
