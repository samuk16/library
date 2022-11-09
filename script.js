
const c = function(e){console.log(e)};

let containerBooks = document.querySelector('.containerBooks');

let btnCreatorBook = document.querySelector('.btnCreator');

let popUp;

let btnSubmit2 = document.querySelector('.btnSubmit');

let library = [];


btnCreatorBook.addEventListener('click',popCreatorBook );

// document.body.addEventListener('click', prueba)

function popCreatorBook(){

    let containerPopUp = document.createElement('div');
    containerPopUp.classList.add('popUpCreateBook')
    document.body.appendChild(containerPopUp)
    popUp = document.querySelector('.popUpCreateBook');


    let btnExit = document.createElement('div');
    btnExit.classList.add('btnExit')
    containerPopUp.appendChild(btnExit);
    btnExit.addEventListener('click', delForm)

    let svgExit = document.createElement('img');
    svgExit.src = './img/svg/x.svg';
    btnExit.appendChild(svgExit);


    let formCreate = document.createElement('form')
    containerPopUp.appendChild(formCreate);
    formCreate.addEventListener('submit',addBookToLibrary)

    let labelTitle = document.createElement('label')
    formCreate.appendChild(labelTitle);

    let pTitle = document.createElement('p')
    pTitle.textContent = 'Title';
    labelTitle.appendChild(pTitle);
    
    let input1 = document.createElement('input'); 
    input1.type = 'text';
    input1.name = 'title';
    input1.classList.add('titleBook')
    labelTitle.appendChild(input1)


    let labelTitle2 = document.createElement('label')
    formCreate.appendChild(labelTitle2);

    let pTitle2 = document.createElement('p')
    pTitle2.textContent = 'Author';
    labelTitle2.appendChild(pTitle2);
    
    let input2 = document.createElement('input'); 
    input2.type = 'text';
    input2.name = 'author'
    labelTitle2.appendChild(input2)


    let labelTitle3 = document.createElement('label')
    formCreate.appendChild(labelTitle3);

    let pTitle3 = document.createElement('p')
    pTitle3.textContent = 'Pages';
    labelTitle3.appendChild(pTitle3);
    
    let input3 = document.createElement('input'); 
    input3.type = 'number';
    input3.name = 'pages'
    labelTitle3.appendChild(input3)



    let labelTitle4 = document.createElement('label')
    formCreate.appendChild(labelTitle4);

    let pTitle4 = document.createElement('p')
    pTitle4.textContent = 'URL of image book';
    labelTitle4.appendChild(pTitle4);
    
    let input4 = document.createElement('input'); 
    input4.type = 'text';
    input4.name = 'url'
    input4.placeholder = 'https://www.example.com';
    labelTitle4.appendChild(input4)


    let pTitle5 = document.createElement('p');
    pTitle5.textContent = 'Have you read it?';
    formCreate.appendChild(pTitle5);


    let labelTitle5 = document.createElement('label')
    labelTitle5.classList.add('switch')
    formCreate.appendChild(labelTitle5);
    
    let input5 = document.createElement('input'); 
    input5.type = 'checkbox';
    input5.name = 'read'
    labelTitle5.appendChild(input5)

    let span = document.createElement('span'); 
    span.classList.add('slider')
    span.classList.add('round')
    labelTitle5.appendChild(span);


    let btnC = document.createElement('button');
    btnC.type= 'submit';
    btnC.classList.add('btnSubmit')
    btnC.name= 'submit';
    formCreate.appendChild(btnC);

    let svgAddBook = document.createElement('img');
    svgAddBook.src = './img/svg/plus.svg';
    btnC.appendChild(svgAddBook);

    c(document.forms)
}

function genBook(obj) {

    let divContainer = document.createElement('div');
    let containerPS = document.createElement('div');
    let pTitle = document.createElement('p');
    let pagesNum = document.createElement('div');
    let pPages = document.createElement('p');
    let editBook = document.createElement('div');
    // let svgEdit = document.createElement('img');


    // let pruebaSvg = document.createElement('svg');
    let pruebaSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    let pathSvgEdit = document.createElementNS('http://www.w3.org/2000/svg','path');
    


    let checkUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    divContainer.classList.add('book');
    // svgEdit.src = './img/svg/dots-horizontal.svg';
    pTitle.textContent = obj.title;
    pPages.textContent = obj.pages;
    divContainer.style.backgroundImage = obj.url.match(checkUrl) ? `url(${obj.url})` : `url(./img/notImage.png)`;

    
    pruebaSvg.setAttributeNS(null, 'width' , '24')
    pruebaSvg.setAttributeNS(null, 'height' , '24')
    pruebaSvg.setAttributeNS(null, 'viewBox' , '0 0 24 24')
    pruebaSvg.setAttributeNS(null, 'fill' , 'none')
    pruebaSvg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', 'http://www.w3.org/2000/svg')
    
    pathSvgEdit.setAttributeNS(null, 'd' , 'M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z')
    pathSvgEdit.setAttributeNS(null, 'stroke' , 'white')
    pathSvgEdit.setAttributeNS(null, 'stroke-width' , '2')
    pathSvgEdit.setAttributeNS(null, 'stroke-linecap' , 'round')
    pathSvgEdit.setAttributeNS(null, 'stroke-linejoin' , 'round')


    containerBooks.appendChild(divContainer);
    divContainer.appendChild(containerPS);
    divContainer.appendChild(pTitle);
    containerPS.appendChild(pagesNum);
    pagesNum.appendChild(pPages);
    containerPS.appendChild(editBook);
    // editBook.appendChild(svgEdit);

    editBook.appendChild(pruebaSvg)
    pruebaSvg.appendChild(pathSvgEdit)
    

}


function addBookToLibrary(e) {
    let title = e.target.elements['title'].value;
    let author = e.target.elements['author'].value;
    let pages = e.target.elements['pages'].value;
    let url = e.target.elements['url'].value;
    let read = e.target.elements['read'].checked;

    let book1 = new book(title,author,pages,url,read);
    // library.push(book1);
    // c(book1.url.length)
    genBook(book1);
    delForm();
    e.preventDefault();
}

function book(title,author,pages,url,read) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.url = url;
    this.read = read;

    

}


function delForm() {
   document.body.removeChild(popUp)
    // c('hola')
    // popUp.addEventListener('click',c('hola'))
}





// if (containerBooks.className ==  'containerBooks') {
//    c(true) 
// }else{
//     c(false)
// }