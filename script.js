//Hiding and showing adding book part 

//2.addbook icon works after 1 click
//3.change notification of the form
//5.update checkbox
//6.work on the variables of the aside
//8.add remove for each row
//9.
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

// GET BOOKS FROM LOCAL STORAGE


function addbook(){
  const title=document.getElementById('title').value;
  console.log(title);
  const author=document.getElementById('author').value;
  console.log(author);
  const pages=document.getElementById('pages').value;
  console.log(pages);
  const bookread=document.getElementById('bookread').checked;
  console.log(bookread);
  const b1=new Book(title,author,pages,bookread);
  console.log(b1.author);
  BOOKS.push(b1);
  console.log(BOOKS[i]);
   addtotable(BOOKS[i]);
   console.log("in addbook func");
}
function addtotable(book1){
    // SAVE TO LOCAL STORAGE
  localStorage.setItem('books', JSON.stringify(BOOKS));
  const tr = document.createElement("tr");
  const td1= document.createElement("td");
  const title1 = document.createTextNode(book1.title);
  td1.appendChild(title1);
  const td2= document.createElement("td");
  const author1 = document.createTextNode(book1.author);
  td2.appendChild(author1);
  const td3= document.createElement("td");
  const page1= document.createTextNode(book1.pages);
  td3.appendChild(page1);
  const td4= document.createElement("td");
  const bookread1= document.createTextNode(book1.bookread);
  // td4.appendChild(bookread1);
  updatecheckbox(td4,book1.bookread);
  document.getElementById('books-list').appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  i++;

}

if (localStorage.getItem('books') === null) {
  BOOKS = [];
} else {
  const booksFromStorage = JSON.parse(localStorage.getItem('books'));
  BOOKS = booksFromStorage;
  console.log(BOOKS);
  for (let i = 0; i < BOOKS.length; i++) {
   addtotable(BOOKS[i]);
    console.log(BOOKS[i]);
  }
  
}
function updatecheckbox(td4,read){
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.setAttribute("onclick","myFunction(this)");
  checkbox.id = i;
  console.log(read);
  if(read==true){
    checkbox.checked=true;
  }
  else{
    checkbox.checked=false;
  }
  td4.appendChild(checkbox);
}
function myFunction(index){
   var update=parseInt(index.id);
   console.log(update);
  update=String(update);
   console.log("after to string"+update);
   var update2=document.getElementById(update);
   console.log(update2);
  // change book read result
  console.log(BOOKS[update].bookread);
  BOOKS[update].bookread=update2.checked;
  console.log(BOOKS[update].bookread);
  var ilayda = BOOKS[update].bookread;
  localStorage.setItem('BOOKS[0].bookread', ilayda );
  
}
sum=0;
function mydelete(){
  for (var j= 1; j<document.getElementById('books-list').rows.length; j++) {
    document.getElementById('books-list').deleteRow(j);
    console.log(j);
    console.log(document.getElementById('books-list').rows.length + "ben bir lengthim");
    sum++;
    console.log(sum + "ben bir sumim");
    mydelete();
    if(document.getElementById('books-list').rows.length==0){
      // localStorage.clear();
      // location.reload();
      break;
    }
    
    
 }
 localStorage.clear();
 location.reload();
//  if(document.getElementById('books-list').rows.length==1){
//   console.log("I have to log out");
// }
// document.getElementById('books-list').detach();
  // BOOKS=[];

}
  //var extracheck=document.getElementById('id'+i).checked;
