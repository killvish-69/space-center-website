const outerdiv=document.getElementById('outerdiv');
const openmenu=document.querySelector('.menuopen');
const closemenu=document.querySelector('.closemenu');
const navbar=document.querySelector('.navbar');
openmenu.addEventListener('click',()=>{
    navbar.classList.remove('hidden');
})
closemenu.addEventListener('click',()=>{
    navbar.classList.add('hidden');
})