const $openButton = document.querySelector('.open-btn');
const $closeButton = document.querySelector('.close-btn');

const $modal = document.querySelector('.modal');
const $modalContainer = document.querySelector('.modal-container');

$openButton.addEventListener('click', function (event) {
  $modal.className = $modal.className.replace('hide', '');

  $modalContainer.className = $modalContainer.className.replace('hide', '');
});

$closeButton.addEventListener('click', function (event) {
  $modal.className += 'hide';
  $modalContainer.className += 'hide';
});
