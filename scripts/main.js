let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Space-Background.png') {
      myImage.setAttribute('src','images/Space-Background2.png');
    } else {
      myImage.setAttribute('src','images/Space-Background.png');
    }
}

let myButton = document.getElementById('myButton')
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName); 
    /*the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later. 
    We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains the user's entry for the name. */
    myHeading.textContent = 'hello, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
    } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'hello, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}