
// Array to hold all book objects
const myLibrary = [];

// book constructor function
// each book gets a unique id and its properties set
function Book(title, author, numberOfPages, isRead) {
        this.id = crypto.randomUUID();     // generate a uniqu id for each book   
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;
}

// add a new book object to the myLibrary array
function addBookToLibrary(title, author, numberOfPages, isRead) {
    const newBook = new Book(title, author, numberOfPages, isRead);
    myLibrary.push(newBook)
}

// adding some initial books to the library 
addBookToLibrary("Harry Potter", "JKRowling", 190, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("1984", "George Orwell", 328, true);

// this looks through the myLibrary array and duplicates each book on a card with the styles added below
function loopThroughArray() {
  const cardClass = document.getElementById("cardClass");
  cardClass.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const booksbox = document.createElement("div");
    booksbox.style.border = "3px solid #DCDCDC";
    booksbox.style.padding = "10px";
    booksbox.style.margin = "8px";
    booksbox.style.textAlign = "center";
    booksbox.setAttribute("data-id", book.id);

    // this is the content thatll be used in the cards
    booksbox.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author : ${book.author}</p>
        <p>Pages: ${book.numberOfPages}</p>
        <p>Read: ${book.isRead ? "Yes" : "No"}</p>
        `;

    // add remove button to each card (looped through)
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove Book";
    removeBtn.style.marginTop = "10px";
    removeBtn.style.padding = "6px 12px";
    removeBtn.style.border = "none";
    removeBtn.style.borderRadius = "4px";
    removeBtn.style.cursor = "pointer";
    removeBtn.style.backgroundColor = "#c0c2bc";
    removeBtn.style.color = "#fff";

    removeBtn.addEventListener("click", function () {
      removeBook(book.id);
    });

    booksbox.appendChild(removeBtn);
    cardClass.appendChild(booksbox); // append each book card to the container
  }
}
loopThroughArray()

//when this button is clicked, it runs display form function, which creates a div with a form that has to be filled in.
let newBookButton = document.getElementById("newBookButton")
newBookButton.addEventListener("click", displayForm) 
newBookButton.style.backgroundColor = "#DCDCDC";
newBookButton.style.padding = "16px"
newBookButton.style.fontSize = "16px"
newBookButton.style.border = "none"
newBookButton.style.borderRadius = "6px"
newBookButton.style.cursor = "pointer"
newBookButton.style.margin = "6px"

// displays the form for added a new book
function displayForm() {
  let formContainer = document.getElementById("formContainer"); // this si the div im targetting
  let bookForm = document.createElement("div");
  bookForm.innerHTML = ` 
        <form id="myForm">
            <label for="Title">Book title:</label>
            <input type="text" id="Title" name="Title" placeholder="Enter book title" required>
            <br>
            <label for="Author">Author:</label>
            <input type="text" id="Author" name="Author" placeholder="Enter book author" required>
            <br>
            <label for="numberOfPages">Number of pages:</label>
            <input type="number" id="numberOfPages" placeholder="Enter amount of pages" required>
            <br>
            <label for="isRead">Read or not</label>
            <input type="checkbox" id="isRead" name="isRead" required>
            <br>
        </form>
    `;

  formContainer.append(bookForm); // inserts my new div (book form) inside the formContainer div that i noted above
}

// set up "add book" button styling
let addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", addToArray);
addBookButton.style.backgroundColor = "#DCDCDC";
addBookButton.style.padding = "16px";
addBookButton.style.fontSize = "16px";
addBookButton.style.border = "none";
addBookButton.style.borderRadius = "6px";
addBookButton.style.cursor = "pointer";
addBookButton.style.margin = "6px";

// adding the user submitted form data to the library
function addToArray() {
    let title = document.getElementById("Title").value     // .value to target the actual input
    let author = document.getElementById("Author").value
    let pages = document.getElementById("numberOfPages").value
    let isRead = document.getElementById("isRead").checked     // .checked because i used checkbox

    if (title === "" || author === "" || pages === "") {     // if these fields are empty
      // didnt include isRead as no check would just mean false
      alert("You must fill out all fields");
      return  // return to stop the function from continuing any further if this condition is met
    }
    
    // adding the book to the library array
    addBookToLibrary(title, author, pages, isRead);

    // clears the form and refresh the book display
    document.getElementById("formContainer").innerHTML = "";
    document.getElementById("cardClass").innerHTML = ""; // removed the form from the page until next use

    loopThroughArray() // rerender the updated book list
}

// 
function removeBook(bookId) {
    const index = myLibrary.findIndex(book => book.id === bookId) // searched through the myLibrary array to the find the index of the books whos id matched the bookId passed into the function
    // .findIndex()  this arrow function checks if the current books id matched the provided bookId
    // if it matches, it returns the index(position) of that book in the array.
    // if no match is found, it returns -1
    if (index !== -1) {
        myLibrary.splice(index, 1) // removed 1 element at position index from the myLibrary array
        loopThroughArray()
    }

}



