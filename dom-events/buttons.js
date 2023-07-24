function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

const $btn = document.querySelector('.click-button');

$btn.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target', event.target);
}

const $hvrBtn = document.querySelector('.hover-button');

$hvrBtn.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target', event.target);
}

const $dblClick = document.querySelector('.double-click-button');

$dblClick.addEventListener('dblclick', handleDoubleClick);
