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

console.log(myLibrary)






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