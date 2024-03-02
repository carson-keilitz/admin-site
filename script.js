// const myLibrary = [];

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // do stuff here
// }

// function render() {
//   // do stuff here
// }


const button = document.querySelector(".resturant-button");
const dialog = document.querySelector(".dialog");
const jsCloseBtn = dialog.querySelector("#js-close")

button.addEventListener('click', () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

//I want a form that has a button that when clicked, opens a dialog box that has a form in it. The form will contain 