//2.addbook icon works after 1 click
//3.change notification of the form

let BOOKS = [];
let i=0;

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

function updatefunc(){
  localStorage.setItem('books', JSON.stringify(BOOKS));
  getasidevalue();
}

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
  const td5= document.createElement("td");
  var img = document.createElement("img");
  img.id=i;
  img.src = "images/icons8-delete-30.png";
  img.addEventListener('click', function handleClick() {
    console.log(img.id);
    myRemove(this);
  });
  td5.appendChild(img);

  createcheckbox(td4,book1.bookread);
  document.getElementById('books-list').appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  i++;
  console.log("added a row");
  getasidevalue();

}

// GET BOOKS FROM LOCAL STORAGE
function load(){
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
}

function createcheckbox(td4,read){
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
  console.log("added a row2")
}

function myFunction(index){
  var update=parseInt(index.id);
  update=String(update);
  var update2=document.getElementById(update);
  console.log("before changing local storage");
  for (let i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(0) + "=[" + localStorage.getItem(localStorage.key(0)) + "]" );
   }
  // change book read result
  console.log(BOOKS[update].bookread); //true
  BOOKS[update].bookread=update2.checked;
  console.log(BOOKS[update].bookread);//false
  updatefunc();
  console.log("after changing local storage");
  for (let i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(0) + "=[" + localStorage.getItem(localStorage.key(0)) + "]");
   }
  
}

function myRemove(index){
  var removeindex=parseInt(index.id);
  console.log(removeindex+"/////////////////////////////////////////////////////////////////")
  console.log(BOOKS);
  console.log(BOOKS[removeindex]);
  if(BOOKS.length==1){
    BOOKS=[];
  }
  else{
    const x = BOOKS.splice(removeindex, 1);
    console.log(x+"/////////////////////////////");
    console.log(BOOKS);}
    removeindex++;
    document.getElementById('books-list').deleteRow(removeindex);
  updatefunc();
  console.log("after changing local storage");
  for (let i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(0) + "=[" + localStorage.getItem(localStorage.key(0)) + "]");
   }
}

function mydelete(){
  for (var j= 1; j<document.getElementById('books-list').rows.length; j++) {
    document.getElementById('books-list').deleteRow(j);
    mydelete();
    if(document.getElementById('books-list').rows.length==0){
      break;
    }
 }
 localStorage.clear();
 location.reload();
}

function getasidevalue(){
  const unread = document.getElementById('books-unread');
  const read= document.getElementById('books-read');
  let readcount=0;
  let unreadcount=0;
  const total = document.getElementById('total-books');
  total.innerHTML=(document.getElementById('books-list').rows.length)-1;

  for (let i = 0; i < BOOKS.length; i++) {
    if(BOOKS[i].bookread==true){
      readcount++;
    }
    else if(BOOKS[i].bookread==false){
      unreadcount++;
    }
   }
   read.innerHTML=readcount;
   unread.innerHTML=unreadcount;

}
load();
getasidevalue();
