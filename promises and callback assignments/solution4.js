
function printTitles(titles){
    titles.sort();
    //printing all title
    for(let i of titles) console.log(i);
}
let books = [
    
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "Nineteen Eighty-Four", author: "George Orwell", year: 1949 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 }
  ];

  let titles=books.map(book=>book.title);
  printTitles(titles)
  