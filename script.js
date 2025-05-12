
// Array to hold all book objects
const myLibrary = [];

function Book(title, author, numberOfPages, isRead) {
        this.id = crypto.randomUUID();     
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;
}

function addBookToLibrary(title, author, numberOfPages, isRead) {
    const newBook = new Book(title, author, numberOfPages, isRead);

    myLibrary.push(newBook)
}
addBookToLibrary("Harry Potter", "JKRowling", 190, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("1984", "George Orwell", 328, true);


function loopThroughArray() {
    for (let i = 0; i < myLibrary.length; i++) {
        const cardClass = document.getElementById("cardClass");
        const booksbox = document.createElement("div")
        booksbox.style.border = "3px solid #DCDCDC";
        booksbox.style.padding = "10px"
        booksbox.style.margin = "8px"
        booksbox.style.textAlign = "center"
        booksbox.innerHTML = `
        <h2>${myLibrary[i].title}</h2>
        <p>Author : ${myLibrary[i].author}</p>
        <p>Pages: ${myLibrary[i].numberOfPages}</p>
        <p>Read: ${myLibrary[i].isRead ? "Yes" : "No"}</p>
        `;
        cardClass.appendChild(booksbox);
    }
}
loopThroughArray()

//when this button is clicked, it runs display form function, which creates a div with a form that has to be filled in. add requried?
let newBookButton = document.getElementById("newBookButton")
newBookButton.addEventListener("click", displayForm) 
newBookButton.style.backgroundColor = "#DCDCDC";
newBookButton.style.padding = "16px"
newBookButton.style.fontSize = "16px"
newBookButton.style.border = "none"
newBookButton.style.borderRadius = "6px"
newBookButton.style.cursor = "pointer"
newBookButton.style.margin = "6px"


function displayForm() {
  let formContainer = document.getElementById("formContainer");
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

  formContainer.append(bookForm);
}


let addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", addToArray);
addBookButton.style.backgroundColor = "#DCDCDC";
addBookButton.style.padding = "16px";
addBookButton.style.fontSize = "16px";
addBookButton.style.border = "none";
addBookButton.style.borderRadius = "6px";
addBookButton.style.cursor = "pointer";
addBookButton.style.margin = "6px";

function addToArray() {
    let title = document.getElementById("Title").value
    let author = document.getElementById("Author").value
    let pages = document.getElementById("numberOfPages").value
    let isRead = document.getElementById("isRead").checked

    if (title === "" || author === "" || pages === "") {
      // didnt include isRead as no check would just mean false
      alert("You must fill out all fields");
      return  // return to stop the function from continuing any further if this condition is met
    }
    
    addBookToLibrary(title, author, pages, isRead);

    document.getElementById("formContainer").innerHTML = "";
    document.getElementById("cardClass").innerHTML = "";

    loopThroughArray()
}





/* 
All of your book objects are going to be stored in an array,
 so you’ll need a constructor for books. Then, add a 
 separate function to the script (not inside the 
 constructor) that can take some arguments, create a 
 book from those arguments, and store the new book 
 object into an array.
Also, all of your book objects 
 should have a unique id, which can be generated using 
 crypto.randomUUID(). This ensures each book has a 
 unique and stable identifier, preventing issues when 
 books are removed or rearranged. Your code should look
  something like this (we’re showing only a basic
   skeleton without function parameters):
*/