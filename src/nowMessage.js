module.exports = function () {
  const nowMessage = document.createElement('p');
  const now =  new Date().toLocaleString()
  nowMessage.innerHTML = "It is now: " + now;
  return nowMessage;
};
