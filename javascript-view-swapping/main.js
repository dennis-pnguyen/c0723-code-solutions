const $tabContainer = document.querySelector('.tab-container');
const $tabNodeList = document.querySelectorAll('.tab');
const $viewNodeList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    const $dataView = event.target.getAttribute('data-view');

    for (const tab of $tabNodeList) {
      if (event.target === tab) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    }
    for (const view of $viewNodeList) {
      if (view.getAttribute('data-view') === $dataView) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    }
  }
});
