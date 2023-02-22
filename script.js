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
  Book(){

  }
  Book(title,author,pages,bookread) {
    this.title = title;
    this.author= author;
    this.pages= pages;
    this.bookread=bookread;
  }

}
let PLAYERS = [];
function addbook(){
  const title=document.getElementById('title').value;
  const author=document.getElementById('author').value;
  const pages=document.getElementById('pages').value;
  const bookread=document.getElementById('bookread').value;
  const b1=new Book(title,author,pages,bookread);
  console.log(b1.author);

}