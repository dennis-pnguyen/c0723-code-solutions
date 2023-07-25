let clicks = 0;

const $lightBulb = document.querySelector('.light-bulb');
const $background = document.querySelector('.image-box');

$lightBulb.addEventListener('click', function (event) {
  clicks++;
  if (clicks % 2 === 0) {
    $lightBulb.className = 'light-bulb ' + 'on';
    $background.className = 'image-box ' + 'on';
  } else {
    $lightBulb.className = 'light-bulb ' + 'off';
    $background.className = 'image-box ' + 'off';
  }
});
