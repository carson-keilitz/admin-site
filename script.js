const myLibrary = [];

function Book(name, type, location, rating, Visited) {
  this.name = name;
  this.type = type;
  this.location = location;
  this.rating = rating;
  this.Visited = Visited;
}

//returns false if resturant is already in library
function addBookToLibrary() {
    let name = document.getElementById("restaurant-name").value;
    let type = document.getElementById("food-type").value;
    let location = document.getElementById("location").value;
    let rating = document.getElementById("rating").value;
    let visited = document.querySelector('input[name="visited"]:checked').value;
    let newBook = new Book(name, type, location, rating, visited);
    
    for (book in myLibrary) {
        if (myLibrary[book].name === name) {
            alert("This resturant is already in your library");
            return false;
        }
    }
    myLibrary.push(newBook);
    const cards = document.querySelector(".cards");
    cards.innerHTML = "";
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML

    for (book in myLibrary) {
        let card = document.createElement("div");
        card.classList.add("card");

        


        cards.appendChild(card);
    }




    
    console.log(myLibrary);
    return true;
}


//I want a form that has a button that when clicked, opens a dialog box that has a form in it. The form will contain 
const modal = document.querySelector("#dialog");
const openModal = document.querySelector(".resturant-button");
const closeModal = document.querySelector("#js-close");
const submitModal = document.querySelector("#js-submit");
const resturantName = document.querySelector(".resturant-name");

function submitForm(modal) {
    let resturantName = document.getElementById("restaurant-name").value;
    let foodtype = document.getElementById("food-type").value;
    let location = document.getElementById("location").value;
    let rating = document.getElementById("rating").value;
    let yes = document.getElementById("yes");
    let want_to = document.getElementById("want_to");
    let no = document.getElementById("no");
    event.preventDefault();
    console.log(yes.checked, no.checked, want_to.checked)
    if (resturantName !== "" && foodtype !== "" && location !== "" && rating !== "" && (yes.checked || no.checked || want_to.checked)) {
        if(addBookToLibrary()) {
            modalClose();
        }
    } 
}

openModal.addEventListener("click", () => {
  modal.showModal();
});

function modalClose() {
    modal.setAttribute("closing", "");
    modal.addEventListener(
      "animationend",
      () => {
        modal.removeAttribute("closing");
        modal.close();
      },
      { once: true }
    );
  };

closeModal.addEventListener("click", modalClose);

submitModal.addEventListener("click", function() {
    submitForm(submitModal);
});
