 function hitSubscribe() {
 const subButton = document.querySelector('.js-subButton');
 if (subButton.innerText === 'Subscribe') {
  subButton.innerText = 'Subscribed';
 } else {
  subButton.innerText = 'Subscribe';
 }
} 

function calculateOrder() {
  const inputElement = document.querySelector('.js-cost-input');

  const cost = parseInt(inputElement.value);

  if (cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost')
    .innerText = `$${cost}`;
}
  