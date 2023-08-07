function changeText() {
  const $h1 = document.querySelector('h1');
  $h1.textContent = 'Hello There';
}

setTimeout(changeText, 2000);
