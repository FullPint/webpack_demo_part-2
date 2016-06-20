var app = document.createElement('div');

function helloTest () {
  var element = document.createElement('h1');
  element.innerHTML = "Test: Hello World!";
  return element;
};

document.body.appendChild(app);
app.appendChild(helloTest());
