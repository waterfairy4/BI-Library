//Hiding and showing adding book part 
const image = document.getElementById('show_hide');

const section = document.getElementById('bookinfo');

image.addEventListener('click', function handleClick() {
  if (section.style.display === 'none') {
    section.style.display = 'flex';
  } else {
    section.style.display = 'none';
  }
});
//books info
class Book{
  constructor(title,author,pages,bookread) {
    this.title = title;
    this.author= author;
    this.pages= pages;
    this.bookread=bookread;
  }

}
let BOOKS = [];
let i=0;
function addbook(){
  const title=document.getElementById('title').value;
  console.log(title);
  const author=document.getElementById('author').value;
  console.log(author);
  const pages=document.getElementById('pages').value;
  console.log(pages);
  const bookread=document.getElementById('bookread').value;
  console.log(bookread);
  const b1=new Book(title,author,pages,bookread);
  console.log(b1.author);
  BOOKS.push(b1);
  console.log(BOOKS[0]);
  addtotable(BOOKS);
}

function addtotable(book1){
  const tr = document.createElement("tr");
  const td1= document.createElement("td");
  const title1 = document.createTextNode(book1[i].title);
  td1.appendChild(title1);
  const td2= document.createElement("td");
  const author1 = document.createTextNode(book1[i].author);
  td2.appendChild(author1);
  const td3= document.createElement("td");
  const page1= document.createTextNode(book1[i].pages);
  td3.appendChild(page1);
  const td4= document.createElement("td");
  const bookread1= document.createTextNode(book1[i].bookread);
  td4.appendChild(bookread1);
  document.getElementById('books-list').appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  i++;


}