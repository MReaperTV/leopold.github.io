let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/logo.png') {
      myImage.setAttribute('src', 'images/logo2.png');
    } else {
      myImage.setAttribute('src', 'images/logo.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Bienvenue sur la page modifiée par ' + myName;
}
if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Bienvenue sur la page modifiée par ' + storedName;
}
myButton.addEventListener('click', function() {
  setUserName();
});