const myLibrary = [{name: "name", type: "type", location: "location", rating: "rating", Visited: "Visited"}];

function Book(name, type, location, rating, Visited) {
  this.name = name;
  this.type = type;
  this.location = location;
  this.rating = rating;
  this.Visited = Visited;
}

// Delete a book from the l

function removeFromLibrary(button) {
  let name = button.id;
  console.log(name);
  for (book in myLibrary) {
        if (myLibrary[book].name === name) {
            myLibrary.splice(book, 1);
            displayLibrary();
            return;
        }
    }
    alert("This resturant is not in your library");
}

function changeVisited(button) {
  let name = button.id;
  console.log(name);
  for (book in myLibrary) {
      if (myLibrary[book].name === name) {
          if (myLibrary[book].Visited === "Yes") {
              myLibrary[book].Visited = "No";
          } else if (myLibrary[book].Visited === "No"){
              myLibrary[book].Visited = "Want to";
          }
          else {
              myLibrary[book].Visited = "Yes";
          }
          displayLibrary();
          return;
      }
  }
  alert("This resturant is not in your library");
}

function displayLibrary() {
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";
  for (book in myLibrary) {
      let card = document.createElement("div");
      card.classList.add("card");
      let cardTitle = document.createElement("div");
      let cardText = document.createElement("div");
      let type = document.createElement("p");
      let location = document.createElement("p");
      let rating = document.createElement("p");
      let visited = document.createElement("p");
      let cardFooter = document.createElement("div");
      // Add the classes to elements
      cardTitle.classList.add("card-title", "project-font");
      cardText.classList.add("card-text", "card-options");
      cardFooter.classList.add("card-footer");
      // Add the text to the elements
      cardTitle.textContent = myLibrary[book].name;
      type.textContent = "Type: " + myLibrary[book].type;
      location.textContent = "Location: " + myLibrary[book].location;
      rating.textContent = "Rating: " + myLibrary[book].rating;
      visited.textContent = "Visited: " + myLibrary[book].Visited;

      // Append information to text
      cardText.appendChild(type);
      cardText.appendChild(location);
      cardText.appendChild(rating);
      cardText.appendChild(visited);

      const sv2 = `<svg id="${myLibrary[book].name}" class="card-image visitSwitch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-plus-outline</title><path d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" /></svg>`
      const sv3 = `<svg id="${myLibrary[book].name}" class="card-image delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-circle-outline</title><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"/></svg>`
      cardFooter.innerHTML = sv2 + sv3;
      card.appendChild(cardTitle);
      card.appendChild(cardText);
      card.appendChild(cardFooter);
      cards.appendChild(card);
  }
  // Add event listeners to visited buttons
  let visitedButtons = document.querySelectorAll(".visitSwitch");
  visitedButtons.forEach(button => {
      button.addEventListener("click", function() {
          changeVisited(button);
      });
  });

  // Add event listeners to delete buttons
  let deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach(button => {
      button.addEventListener("click", function() {
          removeFromLibrary(button);
      });
  });
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
    displayLibrary();
    console.log(myLibrary);
    return true;
}

displayLibrary();




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
