let my_library = []
const form = document.getElementById("myForm");
const submitButton = document.getElementById("submitButton");
let shelf = document.getElementById("book_shelf")



function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
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
  
    for (let i = 0; i < my_library.length; i++) {
        const newDiv = document.createElement("div");
        const deleteButton = document.createElement("button");
        const bookTitle = document.createElement("em");
        const authorText = document.createTextNode(" by " + my_library[i].author);  // Create text node for author's name
    
        deleteButton.className = "close-butt";
        deleteButton.textContent = "Delete Entry";
    
        // Set the book title text in italics
        bookTitle.textContent = my_library[i].title;
    
        // Set attributes or properties of the div
        newDiv.className = "my-div";
    
        newDiv.appendChild(bookTitle); // Append book title
        newDiv.appendChild(authorText); // Append author's name
        newDiv.appendChild(deleteButton); // Append delete button
    
        // Append the div to the book_shelf element
        shelf.appendChild(newDiv);
    
        // Add event listener to delete button
        deleteButton.addEventListener("click", function() {
          shelf.removeChild(newDiv); // Remove the parent div from the shelf
          my_library.splice(i, 1); // Remove the corresponding entry from the my_library array
        });
    }
    
    
      
  }
  



// Create a new div element

