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




// create function to loop through and then pass this in the textContent





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