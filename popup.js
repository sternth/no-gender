let previousCounter = 0;
let counter = 0;

console.log('asdasdasd');

chrome.runtime.onMessage.addListener(function (message) {
  if (message && message.counter) {
    counter += message.counter;
    console.log('c:', previousCounter !== counter);
    if (previousCounter !== counter) {
      setPopupContent(counter);
    }
    previousCounter = counter;
  }
});

function setPopupContent (counter) {
  const content = document.getElementById('popup-content');
  if (counter === 0) {
    content.innerText = 'Es wurden keine Einträge von Genderwahn gefunden.';
  } else if (counter === 1) {
    content.innerText = 'Es wurde ein Eintrag von Genderwahn gefunden.';
  } else {
    content.innerText = 'Es wurden ' + counter + ' Einträge von Genderwahn gefunden.';
  }
}
