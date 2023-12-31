const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.matches('button')) {
    console.log('closest task item:', event.target.closest('.task-list-item'));
    const $closest = event.target.closest('.task-list-item');
    $closest.remove();
  }
});
