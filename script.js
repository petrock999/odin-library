let my_library = []
const form = document.getElementById("myForm");
const submitButton = document.getElementById("submitButton");
let shelf = document.getElementById("book_shelf")



function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.read = false;  // add read property
}


submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (form.checkValidity()) {
    addBookToLibrary();
    showBooks();
    form.reset();
  } else {
    form.reportValidity();
  }
});


function addBookToLibrary(title, author, year) {
  title = form.elements.title.value;
  author = form.elements.author.value;
  year = form.elements.year.value;


  const newBook = new Book(title, author, year)

  my_library.push(newBook)
  form.reset();
  console.log(my_library)
}


console.log(shelf)

function showBooks() {
  // Clear the contents of the book_shelf element
  shelf.innerHTML = "";

  my_library.forEach((book, i) => {
    const newDiv = document.createElement("div");
    const deleteButton = document.createElement("button");
    const bookTitle = document.createElement("em");
    const authorText = document.createTextNode(" by " + book.author);
    const readCheckbox = document.createElement("input");

    readCheckbox.type = "checkbox";
    readCheckbox.className = "read-checkbox";
    readCheckbox.checked = book.read;
    readCheckbox.addEventListener("change", function () {
      book.read = !book.read;
      newDiv.style.backgroundColor = book.read ? "lightgreen" : "white";
    });

    deleteButton.className = "close-butt";
    deleteButton.textContent = "Delete Entry";

    // Set the book title text in italics
    bookTitle.textContent = book.title;

    // Set attributes or properties of the div
    newDiv.className = "my-div";
    newDiv.style.backgroundColor = book.read ? "lightgreen" : "white";

    newDiv.appendChild(bookTitle);
    newDiv.appendChild(authorText);
    newDiv.appendChild(readCheckbox);
    newDiv.appendChild(deleteButton);

    // Append the div to the book_shelf element
    shelf.appendChild(newDiv);

    // Add event listener to delete button
    deleteButton.addEventListener("click", function () {
      shelf.removeChild(newDiv);
      my_library.splice(i, 1);
      showBooks();  // re-render the books
    });
  });
}







// Create a new div element

