const $h1 = document.querySelector('h1');

const nIntervId = setInterval(function () {
  let counter = $h1.textContent;
  if (counter > 1) {
    counter--;
    $h1.textContent = counter;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(nIntervId);
  }
}, 1000);
