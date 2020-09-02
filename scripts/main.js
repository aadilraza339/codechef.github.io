let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/codechef.jpg') {
      myImage.setAttribute('src','images/download.jpeg');
    } else {
      myImage.setAttribute('src','images/codechef.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'codechef is cool, ' + myName;
  }
 


  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'codechef is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
 
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'codechef is cool, ' + myName;
    }
  }