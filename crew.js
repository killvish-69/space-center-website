const outerdiv=document.getElementById('outerdiv');
const openmenu=document.querySelector('.menuopen');
const closemenu=document.querySelector('.closemenu');
const navbar=document.querySelector('.navbar');
const profession=document.querySelector('.line2');
const description=document.querySelector('.description');
const crewmatename=document.querySelector('.line3');
const first=document.getElementById('first');
const second=document.getElementById('second');
const third=document.getElementById('third');
const fourth=document.getElementById('fourth');
const image=document.getElementById('image');
first.style.opacity="1"
openmenu.addEventListener('click',()=>{
    navbar.classList.remove('hidden');
})
closemenu.addEventListener('click',()=>{
    navbar.classList.add('hidden');
})
first.addEventListener('click',()=>{
    profession.innerHTML="Pilot";
crewmatename.innerHTML="Victor Glover";
description.innerHTML=" Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
image.setAttribute('src',"assets/crew/image-victor-glover.png")
second.style.opacity="0.4";
first.style.opacity="1";
third.style.opacity="0.4";
fourth.style.opacity="0.4";
})
second.addEventListener('click',()=>{
    profession.innerHTML="Mission Specialist";
crewmatename.innerHTML="Mark Shuttleworth";
description.innerHTML="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
image.setAttribute('src',"assets/crew/image-mark-shuttleworth.png")
second.style.opacity="1";
first.style.opacity="0.4";
third.style.opacity="0.4";
fourth.style.opacity="0.4";
})
third.addEventListener('click',()=>{
    profession.innerHTML="Commander";
crewmatename.innerHTML="Douglas Hurley";
description.innerHTML="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
image.setAttribute('src',"assets/crew/image-douglas-hurley.png")
second.style.opacity="0.4";
first.style.opacity="0.4";
third.style.opacity="1";
fourth.style.opacity="0.4";
})
fourth.addEventListener('click',()=>{
    profession.innerHTML="Flight Engineer";
crewmatename.innerHTML="Anousheh Ansari";
description.innerHTML="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
image.setAttribute('src',"assets/crew/image-anousheh-ansari.png")
second.style.opacity="0.4";
first.style.opacity="0.4";
third.style.opacity="0.4";
fourth.style.opacity="1";
})