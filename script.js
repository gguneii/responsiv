let search=document.querySelector('.search')
let input=document.querySelector('.search-input')
let close=document.querySelector('.close')

search.addEventListener('click',()=>{
    input.classList.toggle('search-active');
    search.classList.toggle('color-change');
    document.querySelector('.axtaris').classList.toggle('color-change')
})

close.addEventListener('click',()=>{
    input.classList.remove('search-active')
    search.classList.remove('color-change');
})

let az=document.querySelector('.az')
let list=document.querySelector('.list')

az.addEventListener('click',()=>{
   list.classList.toggle('list-active');
   document.querySelector('.arrow i').classList.toggle('icon-rotate');
})