
const c = function(e){console.log(e)};

let containerBooks = document.querySelector('.containerBooks');

let btnCreatorBook = document.querySelector('.btnCreator');

let popUp;

let index = 0;

let library = [];

let bookIndex ;

btnCreatorBook.addEventListener('click',popCreatorBook );

function popCreatorBook(){


    let containerPopUp = document.createElement('div');

    let btnExit = document.createElement('div');

    let svgExit = document.createElement('img');

    let formCreate = document.createElement('form')

    let labelTitle = document.createElement('label')

    let pTitle = document.createElement('p')

    let input1 = document.createElement('input'); 

    let labelTitle2 = document.createElement('label')

    let pTitle2 = document.createElement('p')

    let input2 = document.createElement('input'); 

    let labelTitle3 = document.createElement('label')

    let pTitle3 = document.createElement('p')

    let input3 = document.createElement('input'); 

    let labelTitle4 = document.createElement('label')

    let pTitle4 = document.createElement('p')

    let input4 = document.createElement('input'); 

    let pTitle5 = document.createElement('p');

    let labelTitle5 = document.createElement('label')

    let input5 = document.createElement('input'); 

    let span = document.createElement('span'); 

    let btnC = document.createElement('button');

    let svgAddBook = document.createElement('img');


    containerPopUp.classList.add('popUpCreateBook')
    containerPopUp.classList.add('blur-in-expand')
    // containerPopUp.classList.add('blur-out-expand')
    btnExit.classList.add('btnExit')
    btnExit.addEventListener('click', () => {
        containerPopUp.style.animation = 'blur-out-expand 0.15s linear both';
        setTimeout(() => {delFormCreator()},140)
        

    })
    svgExit.src = './img/svg/x.svg';

    formCreate.addEventListener('submit',addBookToLibrary)

    pTitle.textContent = 'Title';
    
    input1.type = 'text';
    input1.name = 'title';
    input1.classList.add('titleBook')

    pTitle2.textContent = 'Author';
    
    input2.type = 'text';
    input2.name = 'author'

    pTitle3.textContent = 'Pages';
    
    input3.type = 'number';
    input3.name = 'pages'

    pTitle4.textContent = 'URL of image book';
    
    input4.type = 'text';
    input4.name = 'url'
    input4.placeholder = 'https://www.example.com';

    pTitle5.textContent = 'Have you read it?';

    labelTitle5.classList.add('switch')
    
    input5.type = 'checkbox';
    input5.name = 'read'

    span.classList.add('slider')
    span.classList.add('round')


    btnC.type= 'submit';
    btnC.classList.add('btnSubmit')
    btnC.name= 'submit';

    svgAddBook.src = './img/svg/plus.svg';



    

    // c(document.forms);

    if (document.forms.length > 0) {
        
    } else {
        document.body.appendChild(containerPopUp)

        containerPopUp.appendChild(btnExit);

        btnExit.appendChild(svgExit);

        containerPopUp.appendChild(formCreate);

        formCreate.appendChild(labelTitle);

        labelTitle.appendChild(pTitle);

        labelTitle.appendChild(input1)

        formCreate.appendChild(labelTitle2);

        labelTitle2.appendChild(pTitle2);

        labelTitle2.appendChild(input2)

        formCreate.appendChild(labelTitle3);

        labelTitle3.appendChild(pTitle3);

        labelTitle3.appendChild(input3)

        formCreate.appendChild(labelTitle4);

        labelTitle4.appendChild(pTitle4);

        labelTitle4.appendChild(input4)

        formCreate.appendChild(pTitle5);

        formCreate.appendChild(labelTitle5);

        labelTitle5.appendChild(input5)

        labelTitle5.appendChild(span);

        formCreate.appendChild(btnC);

        btnC.appendChild(svgAddBook);
    }
}

function genBook(obj) {

    let divContainer = document.createElement('div');
    let containerPS = document.createElement('div');
    let pTitle = document.createElement('p');
    let pagesNum = document.createElement('div');
    let pPages = document.createElement('p');
    let editBook = document.createElement('div');
    
    let svgEdit = document.createElementNS('http://www.w3.org/2000/svg','svg');
    let pathSvgEdit = document.createElementNS('http://www.w3.org/2000/svg','path');

    let containerSvgRNR = document.createElement('div');
    let svgRead = document.createElementNS('http://www.w3.org/2000/svg','svg');
    let pathRead1 = document.createElementNS('http://www.w3.org/2000/svg','path');
    let pathRead2 = document.createElementNS('http://www.w3.org/2000/svg','path');
    
    let svgNotRead = document.createElementNS('http://www.w3.org/2000/svg','svg');
    let pathNotRead1 = document.createElementNS('http://www.w3.org/2000/svg','path');
    let pathNotRead2 = document.createElementNS('http://www.w3.org/2000/svg','path');
    let lineNotRead = document.createElementNS('http://www.w3.org/2000/svg','line');

    let checkUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    divContainer.classList.add('book');
    divContainer.setAttribute('data-index', obj.index)
    divContainer.classList.add('blur-in-expand')
    // prueba14 = document.querySelector('.book');
    // c(prueba14)
    pTitle.textContent = obj.title;
    pPages.textContent = obj.pages;
    divContainer.style.backgroundImage = obj.url.match(checkUrl) ? `url(${obj.url})` : `url(./img/notImage.png)`;
    
    editBook.addEventListener('click', () => {

        bookIndex = divContainer.getAttribute('data-index')
        // c(bookIndex)
        // c(library[bookIndex])
        // divContainer.style.animation = 'blur-out-expand 0.15s linear both';
        // setTimeout(() => {delFormCreator()},140)
        genPopUpEditBook(library[bookIndex]);
        // popUpEdit();
    });

    // pTitle.addEventListener('click', popUpEdit)

    svgEdit.setAttributeNS(null, 'width' , '24')
    svgEdit.setAttributeNS(null, 'height' , '24')
    svgEdit.setAttributeNS(null, 'viewBox' , '0 0 24 24')
    svgEdit.setAttributeNS(null, 'fill' , 'none')
    svgEdit.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', 'http://www.w3.org/2000/svg')
    
    pathSvgEdit.classList.add('pathSvg');
    pathSvgEdit.setAttributeNS(null, 'd' , 'M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z')
    pathSvgEdit.setAttributeNS(null, 'stroke' , 'white')
    pathSvgEdit.setAttributeNS(null, 'stroke-width' , '2')
    pathSvgEdit.setAttributeNS(null, 'stroke-linecap' , 'round')
    pathSvgEdit.setAttributeNS(null, 'stroke-linejoin' , 'round')

    // <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M10.0003 12C11.1048 12 12.0003 11.1046 12.0003 10C12.0003 8.89543 11.1048 8 10.0003 8C8.89568 8 8.00025 8.89543 8.00025 10C8.00025 11.1046 8.89568 12 10.0003 12Z" fill="white"/>
    //     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.458008 10C1.73226 5.94291 5.52256 3 10.0002 3C14.4778 3 18.2681 5.94288 19.5424 9.99996C18.2682 14.0571 14.4778 17 10.0002 17C5.52257 17 1.73228 14.0571 0.458008 10ZM14.0003 10C14.0003 12.2091 12.2094 14 10.0003 14C7.79111 14 6.00025 12.2091 6.00025 10C6.00025 7.79086 7.79111 6 10.0003 6C12.2094 6 14.0003 7.79086 14.0003 10Z" fill="white"/>
    // </svg>

    

    svgRead.setAttributeNS(null, 'width' , '20');
    svgRead.setAttributeNS(null, 'height' , '20');
    svgRead.setAttributeNS(null, 'viewBox' , '0 0 20 20');
    svgRead.setAttributeNS(null, 'fill' , 'none');
    svgRead.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', 'http://www.w3.org/2000/svg'); 
    
    pathRead1.classList.add('pathRead')
    pathRead1.setAttributeNS(null, 'd' , 'M10.0003 12C11.1048 12 12.0003 11.1046 12.0003 10C12.0003 8.89543 11.1048 8 10.0003 8C8.89568 8 8.00025 8.89543 8.00025 10C8.00025 11.1046 8.89568 12 10.0003 12Z')
    pathRead1.setAttributeNS(null, 'fill' , 'white')
    
    pathRead2.classList.add('pathRead')
    pathRead2.setAttributeNS(null,'fill-rule','evenodd');
    pathRead2.setAttributeNS(null,'clip-rule','evenodd');
    pathRead2.setAttributeNS(null,'d','M0.458008 10C1.73226 5.94291 5.52256 3 10.0002 3C14.4778 3 18.2681 5.94288 19.5424 9.99996C18.2682 14.0571 14.4778 17 10.0002 17C5.52257 17 1.73228 14.0571 0.458008 10ZM14.0003 10C14.0003 12.2091 12.2094 14 10.0003 14C7.79111 14 6.00025 12.2091 6.00025 10C6.00025 7.79086 7.79111 6 10.0003 6C12.2094 6 14.0003 7.79086 14.0003 10Z');
    pathRead2.setAttributeNS(null,'fill','white');


    // <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M10.0003 12C11.1048 12 12.0003 11.1046 12.0003 10C12.0003 8.89543 11.1048 8 10.0003 8C8.89568 8 8.00025 8.89543 8.00025 10C8.00025 11.1046 8.89568 12 10.0003 12Z" fill="white"/>
    //     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.458008 10C1.73226 5.94291 5.52256 3 10.0002 3C14.4778 3 18.2681 5.94288 19.5424 9.99996C18.2682 14.0571 14.4778 17 10.0002 17C5.52257 17 1.73228 14.0571 0.458008 10ZM14.0003 10C14.0003 12.2091 12.2094 14 10.0003 14C7.79111 14 6.00025 12.2091 6.00025 10C6.00025 7.79086 7.79111 6 10.0003 6C12.2094 6 14.0003 7.79086 14.0003 10Z" fill="white"/>
    //     <line x1="3.87034" y1="16.7091" x2="15.8826" y2="3.12966" stroke="white" stroke-width="3" stroke-linecap="round"/>
    // </svg>

    svgNotRead.setAttributeNS(null, 'width' , '20');
    svgNotRead.setAttributeNS(null, 'height' , '20');
    svgNotRead.setAttributeNS(null, 'viewBox' , '0 0 20 20');
    svgNotRead.setAttributeNS(null, 'fill' , 'none');
    svgNotRead.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', 'http://www.w3.org/2000/svg'); 

    pathNotRead1.classList.add('pathRead')
    pathNotRead1.setAttributeNS(null, 'd' , 'M10.0003 12C11.1048 12 12.0003 11.1046 12.0003 10C12.0003 8.89543 11.1048 8 10.0003 8C8.89568 8 8.00025 8.89543 8.00025 10C8.00025 11.1046 8.89568 12 10.0003 12Z')
    pathNotRead1.setAttributeNS(null, 'fill' , 'white')

    pathNotRead2.classList.add('pathRead')
    pathNotRead2.setAttributeNS(null,'fill-rule','evenodd');
    pathNotRead2.setAttributeNS(null,'clip-rule','evenodd');
    pathNotRead2.setAttributeNS(null,'d','M0.458008 10C1.73226 5.94291 5.52256 3 10.0002 3C14.4778 3 18.2681 5.94288 19.5424 9.99996C18.2682 14.0571 14.4778 17 10.0002 17C5.52257 17 1.73228 14.0571 0.458008 10ZM14.0003 10C14.0003 12.2091 12.2094 14 10.0003 14C7.79111 14 6.00025 12.2091 6.00025 10C6.00025 7.79086 7.79111 6 10.0003 6C12.2094 6 14.0003 7.79086 14.0003 10Z');
    pathNotRead2.setAttributeNS(null,'fill','white');

    lineNotRead.setAttributeNS(null, 'x1' , '3.87034')
    lineNotRead.setAttributeNS(null, 'y1' , '16.7091')
    lineNotRead.setAttributeNS(null, 'x2' , '15.8826')
    lineNotRead.setAttributeNS(null, 'y2' , '3.12966')
    lineNotRead.setAttributeNS(null, 'stroke' , 'white')
    lineNotRead.setAttributeNS(null, 'stroke-width' , '3')
    lineNotRead.setAttributeNS(null, 'stroke-linecap' , 'round')


    containerBooks.appendChild(divContainer);
    divContainer.appendChild(containerPS);
    divContainer.appendChild(pTitle);
    containerPS.appendChild(pagesNum);
    pagesNum.appendChild(pPages);
    containerPS.appendChild(editBook);
    editBook.appendChild(svgEdit)
    svgEdit.appendChild(pathSvgEdit)
    pagesNum.appendChild(containerSvgRNR);
    // containerSvgRNR.appendChild(obj.read ? )
    if (obj.read) {
        containerSvgRNR.appendChild(svgRead);
        svgRead.appendChild(pathRead1);
        svgRead.appendChild(pathRead2);
    } else {
        containerSvgRNR.appendChild(svgNotRead);
        svgNotRead.appendChild(pathNotRead1);
        svgNotRead.appendChild(pathNotRead2);
        svgNotRead.appendChild(lineNotRead);
    }
}

function genPopUpEditBook(obj) {

    let containerPopEditBook = document.createElement('div');   

    let containerImgEditBook = document.createElement('div');   
    let pTitleEditBook = document.createElement('p');
    let imgPreview = document.createElement('div');
    let svgExit = document.createElement('img');
    let btnExit = document.createElement('div');
    let containerFormEdit = document.createElement('form');
    let labelTitle = document.createElement('label');
    let pLabelTitle = document.createElement('p');
    let inputLabelTitle = document.createElement('input');
    let labelAuthor = document.createElement('label');
    let pLabelAuthor = document.createElement('p');
    let inputLabelAuthor = document.createElement('input');
    let labelPages = document.createElement('label');
    let pLabelPages = document.createElement('p');
    let inputLabelPages = document.createElement('input');
    let labelUrl = document.createElement('label');
    let pLabelUrl = document.createElement('p');
    let inputLabelUrl = document.createElement('input');
    let pRead = document.createElement('p');
    let labelcheckbox = document.createElement('label');
    let inputLabeSwitch = document.createElement('input');
    let spanSwitch = document.createElement('span');
    let containerBtnsDelSave = document.createElement('div');
    let btnDel = document.createElement('div');
    let svgDel = document.createElement('img');
    let btnSave = document.createElement('button');
    let svgSave = document.createElement('img');
    
    
    let checkUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    containerPopEditBook.classList.add('popEditBook');
    containerPopEditBook.classList.add('blur-in-expand')
    
    
    containerImgEditBook.style.backgroundImage = obj.url.match(checkUrl) ? `url(${obj.url})` : `url(./img/notImage.png)` ;
    imgPreview.style.backgroundImage = obj.url.match(checkUrl) ? `url(${obj.url})` : `url(./img/notImage.png)`;

    btnExit.addEventListener('click', () => {
        containerPopEditBook.style.animation = 'blur-out-expand 0.15s linear both';
        setTimeout(() => {delFormEdit()},140)
        
    });
    btnExit.classList.add('btnExit')
    svgExit.src = './img/svg/x.svg';
    

    pLabelTitle.textContent = 'Title';
    inputLabelTitle.type = 'text';
    inputLabelTitle.name = 'title';
    inputLabelTitle.value = obj.title;

    pLabelAuthor.textContent = 'Author';
    inputLabelAuthor.type = 'text';
    inputLabelAuthor.name = 'author';
    inputLabelAuthor.value = obj.author;

    pLabelPages.textContent = 'Pages';
    inputLabelPages.type = 'number';
    inputLabelPages.name = 'pages';
    inputLabelPages.value = obj.pages;

    pLabelUrl.textContent = 'URL of image book';
    inputLabelUrl.type = 'text';
    inputLabelUrl.name = 'url';
    inputLabelUrl.placeholder = 'https://www.example.com';
    inputLabelUrl.value = obj.url;

    pRead.textContent = 'Have you read it?';
    labelcheckbox.classList.add('switch');
    inputLabeSwitch.type = 'checkbox';
    inputLabeSwitch.name = 'read';
    inputLabeSwitch.checked = obj.read;
    spanSwitch.classList.add('slider');
    spanSwitch.classList.add('round');

    svgDel.src = './img/svg/trash.svg';
    btnDel.addEventListener('click', () => {
        
        delBook();
        delFormEdit();
    })

    btnSave.type = 'submit';
    svgSave.src = './img/svg/save.svg';

    btnSave.addEventListener("click", delBook)

    containerFormEdit.addEventListener('submit', e => {
        obj.title = e.target.elements['title'].value;
        obj.author = e.target.elements['author'].value;
        obj.pages = e.target.elements['pages'].value;
        obj.url = e.target.elements['url'].value;
        obj.read = e.target.elements['read'].checked;
        c(e.target.elements['read'].checked);
        // delBook();
        setTimeout(() => {genBook(obj)},150) 
        delFormEdit();
        // c(obj.title)
        e.preventDefault();
    })
    
    if (document.forms.length > 0) {
        
    } else {
        document.body.appendChild(containerPopEditBook);

        containerPopEditBook.appendChild(containerImgEditBook);
    
        containerImgEditBook.appendChild(pTitleEditBook);
    
        containerImgEditBook.appendChild(imgPreview);
    
        btnExit.appendChild(svgExit);
    
        containerPopEditBook.appendChild(btnExit);
    
        containerPopEditBook.appendChild(containerFormEdit);
    
        containerFormEdit.appendChild(labelTitle);
    
        labelTitle.appendChild(pLabelTitle);
    
        labelTitle.appendChild(inputLabelTitle);
    
        containerFormEdit.appendChild(labelAuthor)
    
        labelAuthor.appendChild(pLabelAuthor);
    
        labelAuthor.appendChild(inputLabelAuthor);
    
        containerFormEdit.appendChild(labelPages);
    
        labelPages.appendChild(pLabelPages);
    
        labelPages.appendChild(inputLabelPages);
    
        containerFormEdit.appendChild(labelUrl);
    
        labelUrl.appendChild(pLabelUrl);
    
        labelUrl.appendChild(inputLabelUrl);
    
        containerFormEdit.appendChild(pRead);
    
        containerFormEdit.appendChild(labelcheckbox);
    
        labelcheckbox.appendChild(inputLabeSwitch);
    
        labelcheckbox.appendChild(spanSwitch);
    
        containerFormEdit.appendChild(containerBtnsDelSave);
    
        containerBtnsDelSave.appendChild(btnDel);
    
        btnDel.appendChild(svgDel);
    
        containerBtnsDelSave.appendChild(btnSave);
    
        btnSave.appendChild(svgSave);
    
    }

    

}


function addBookToLibrary(e) {
    let title = e.target.elements['title'].value;
    let author = e.target.elements['author'].value;
    let pages = e.target.elements['pages'].value;
    let url = e.target.elements['url'].value;
    let read = e.target.elements['read'].checked;
    
    let book1 = new book(title,author,pages,url,read,index);
    library.push(book1);
    // c(book1.url.length)
    genBook(book1);
    index++;
    // c(library)
    // library.forEach(el => c(el.title));
    delFormCreator();
    e.preventDefault();
}

function book(title,author,pages,url,read,index) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.url = url;
    this.read = read;   
    this.index = index;
}

function delFormCreator() {
    const popUp = document.querySelector('.popUpCreateBook');
   
   document.body.removeChild(popUp)
}

function delFormEdit() {
    const popUpEditDel= document.querySelector('.popEditBook');
    
    document.body.removeChild(popUpEditDel)
    
    
}
// buscar como eliminar o cambiar un book
function delBook() {

    for (let i = 0; i <= containerBooks.children.length; i++) {
        let test6 = containerBooks.children[i];
        // c(test6.getAttribute('data-index'))
        if (test6.getAttribute('data-index') == bookIndex) {
            test6.style.animation = 'blur-out-expand 0.15s linear both';
            setTimeout(() => {containerBooks.removeChild(test6);},140)
            break;
        }
    }   
}


