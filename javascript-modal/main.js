const $openButton = document.querySelector('.open-btn');
const $closeButton = document.querySelector('.close-btn');

$openButton.addEventListener('click', function (event) {
  const $modal = document.querySelector('.modal');
  const $modalContainer = document.querySelector('.modal-container');

  $modal.className = $modal.className.replace('hide', '');

  $modalContainer.className = $modalContainer.className.replace('hide', '');
});

$closeButton.addEventListener('click', function (event) {
  const $modal = document.querySelector('.modal');
  const $modalContainer = document.querySelector('.modal-container');

  console.log($modalContainer);
  $modal.className += 'hide';
  $modalContainer.className += 'hide';
});
