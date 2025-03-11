 function hitSubscribe() {
 const subButton = document.querySelector('.js-subButton');
 if (subButton.innerText === 'Subscribe') {
  subButton.innerText = 'Subscribed';
 } else {
  subButton.innerText = 'Subscribe';
 }
} 