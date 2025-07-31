
let candle = document.getElementById('candle');
let message = document.getElementById('message');
window.onload = function () {
const candle = document.getElementById('candle');
const prompt = document.getElementById('prompt');
let clickCount = 0;

setTimeout(() => {
  candle.src = 'candle_off.png';
}, 2000); // ⏳ Turns off after 2 seconds
  setTimeout(() => {
  prompt.style.display = 'block';
}, 3000);
candle.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 1) {
    prompt.style.display = 'none';
    candle.src = 'candle_on.png';
    setTimeout(() => {
      candle.src = 'candle_off.png';
    }, 2000);
  } else if (clickCount === 2) {
    candle.src = 'candle_on.png';
    setTimeout(() => {
      candle.src = 'candle_off.png';
    }, 2000);
  } else if (clickCount === 3) {
    candle.style.display = 'none';
    message.style.display = 'block';
  }
});
      }
