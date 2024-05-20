let title = document.getElementById('title')
let introduction = document.getElementsByTagName('div')
let morecontent = document.querySelector('#morecontent')
let lastcontent = document.querySelector('.lastcontent')
let products = document.querySelectorAll('.products .product')
let btn = document.querySelector('#btn-changebg')

let username = document.getElementById('username')

username.addEventListener('focus', ()=>{
    username.style.border = '2px green solid'
})

btn.style.background = 'red'

btn.addEventListener('click', ()=>{

    if(document.body.style.background == "orange"){
        document.body.style.background = 'white'
    }else{
        document.body.style.background = "orange"
    }

    // console.log('clicked');
})

console.log(products);

products.forEach(prod=>{
    prod.style.padding = '15px'
    prod.style.background = 'gray'
    prod.style.borderRadius = '10px'
    prod.style.margin = '10px'
})

morecontent.style.padding = '20px'
morecontent.style.background = 'green'
morecontent.style.color = 'white'

lastcontent.style.padding = '10px'
lastcontent.style.background = 'red'
lastcontent.style.color = 'white'

// console.log(morecontent);

// console.log(introduction);
introduction[1].innerHTML= "changed the paragraph";

title.textContent = "Welcome to DOM session"