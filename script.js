
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