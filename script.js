
let candle = document.getElementById('candle');
let message = document.getElementById('message');
window.onload = function () {
const candle = document.getElementById('candle');
let clickCount = 0;

setTimeout(() => {
  candle.src = 'candle_off.png';
}, 2000); // ⏳ Turns off after 2 seconds
candle.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 1) {
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
    candle.src = 'candle_on.png';
    message.classList.remove('hidden');
  }
});
      }
