const myImage = document.querySelector("img");
myImage.onclick = () =>{
	const mysrc = myImage.getAttribute("src")
	if (mysrc === "images/darshan.jpg"){
		myImage.setAttribute("src","images/2.jpeg");
	}
	else{
		myImage.setAttribute("src","images/darshan.jpg");
	}
};
let myButton = document.querySelector("button")
myButton.onclick = () => {
  setUserName();
};
let myHeading = document.querySelector("h1")
function setUserName() {
	const myName = prompt("Please enter your name");
	if (!myName){
		setUserName();
	}
	else{
		localStorage.setItem("name",myName);
		myHeading.textContent = `My name is ${myName}`;
	}
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `My name is ${storedName}`;
}
