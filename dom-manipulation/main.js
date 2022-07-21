// let ulElements = document.querySelector(".items");
// console.log(ulElements);
// //ulElements.forEach(element => element.remove());

// ulElements.children[1].innerHTML = "JavaScript";

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(e);
//     document.getElementById("my-form").style.backgroundColor = "red";
//     document.querySelector("header").style.backgroundColor = "blue";
//     document.querySelector("body").classList.add("bg-dark");
// })

//get the DOM elements and assign them to variables

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

//add event listener to the form
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter your name and email";
    setTimeout(() => msg.remove(), 5000);
  } else {
    const li = document.createElement("li");
    li.innerHTML = `${nameInput.value} : ${emailInput.value}`
    userList.appendChild(li);
    nameInput.value = "";
    emailInput.value = "";
  }
}