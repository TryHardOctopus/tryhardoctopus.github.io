let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'C:users/back office/desktop/website/images/finger.png') {
    myImage.setAttribute('src','C:users/back office/desktop/website/images/gamma.png');
  } else {
    myImage.setAttribute('src','C:users/back office/desktop/website/images/finger.png');
  }
}

// b u t t o n
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = "You're in for a ride, " + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = "You're in for a ride, " + storedName +".";
}

myButton.onclick = function() {
  myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = "You're in for a ride, " + myName;
}