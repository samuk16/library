
const c = function(e){console.log(e)};

let containerBooks = document.querySelector('.containerBooks');

let btnCreatorBook = document.querySelector('.btnCreator');

let popUp = document.querySelector('.popUpCreateBook');

let label2 = document.querySelector('label');

const formCreate2 = {
    
    'div2': ['btnExit','div'] ,



};

btnCreatorBook.addEventListener('click',popCreatorBook );

function popCreatorBook(){

    let containerPopUp = document.createElement('div');
    containerPopUp.classList.add('popUpCreateBook')
    document.body.appendChild(containerPopUp)

    let btnExit = document.createElement('div');
    btnExit.classList.add('btnExit')
    containerPopUp.appendChild(btnExit);

    let svgExit = document.createElement('img');
    svgExit.src = './img/svg/x.svg';
    btnExit.appendChild(svgExit);


    let formCreate = document.createElement('form')
    containerPopUp.appendChild(formCreate);


    let labelTitle = document.createElement('label')
    formCreate.appendChild(labelTitle);

    let pTitle = document.createElement('p')
    pTitle.textContent = 'Title';
    labelTitle.appendChild(pTitle);
    
    let input1 = document.createElement('input'); 
    input1.type = 'text';
    labelTitle.appendChild(input1)


    let labelTitle2 = document.createElement('label')
    formCreate.appendChild(labelTitle2);

    let pTitle2 = document.createElement('p')
    pTitle2.textContent = 'Author';
    labelTitle2.appendChild(pTitle2);
    
    let input2 = document.createElement('input'); 
    input1.type = 'text';
    labelTitle2.appendChild(input2)


    let labelTitle3 = document.createElement('label')
    formCreate.appendChild(labelTitle3);

    let pTitle3 = document.createElement('p')
    pTitle3.textContent = 'Pages';
    labelTitle3.appendChild(pTitle3);
    
    let input3 = document.createElement('input'); 
    input3.type = 'number';
    labelTitle3.appendChild(input3)



    let labelTitle4 = document.createElement('label')
    formCreate.appendChild(labelTitle4);

    let pTitle4 = document.createElement('p')
    pTitle4.textContent = 'URL of image book';
    labelTitle4.appendChild(pTitle4);
    
    let input4 = document.createElement('input'); 
    input4.type = 'text';
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
    labelTitle5.appendChild(input5)

    let span = document.createElement('span'); 
    span.classList.add('slider')
    span.classList.add('round')
    labelTitle5.appendChild(span);


    let btnC = document.createElement('button');
    btnC.type= 'submit';
    formCreate.appendChild(btnC)

    let svgAddBook = document.createElement('img');
    svgAddBook.src = './img/svg/plus.svg';
    btnC.appendChild(svgAddBook);


}


// c(formCreate['div'][1])
// c(formCreate.div2)
// console.log(formCreate.div2)

// for (const atr in formCreate) {
        
//     let div2 = document.createElement(formCreate[atr][1]);
//     div2.classList.add(formCreate[atr][0])
//     popUp.appendChild(div2);
    
    
    
    
    
// }