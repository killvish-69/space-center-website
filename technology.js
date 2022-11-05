const outerdiv = document.getElementById('outerdiv');
const openmenu = document.querySelector('.menuopen');
const closemenu = document.querySelector('.closemenu');
const navbar = document.querySelector('.navbar');
const one = document.getElementById('first');
const two = document.getElementById('second');
const three = document.getElementById('third');
const image = document.getElementById('image');
const title = document.querySelector('.line2');
const technology = document.querySelector('.line3');
const description = document.querySelector('.description');
const mediaquery=window.matchMedia("(max-width:930px");

if(mediaquery.matches){
    image.setAttribute('src', 'assets/technology/image-launch-vehicle-portrait.jpg');
}
else{
    image.setAttribute('src', 'assets/technology/image-launch-vehicle-landscape.jpg');
}

openmenu.addEventListener('click', () => {
    navbar.classList.remove('hidden');
})
closemenu.addEventListener('click', () => {
    navbar.classList.add('hidden');
})
two.addEventListener('click', () => {
    technology.innerHTML = "Spaceport";
    description.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    if(mediaquery.matches){
        image.setAttribute('src', 'assets/technology/image-spaceport-portrait.jpg');
    }
    else{
    image.setAttribute('src', 'assets/technology/image-spaceport-landscape.jpg');
    }
})
one.addEventListener('click', () => {
    technology.innerHTML = "Launch vehicle";
    description.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    if(mediaquery.matches){
        image.setAttribute('src', 'assets/technology/image-launch-vehicle-portrait.jpg');
    }
    else{
        image.setAttribute('src', 'assets/technology/image-launch-vehicle-landscape.jpg');
    }
})
three.addEventListener('click', () => {
    technology.innerHTML = " Space capsule";
    description.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    if(mediaquery.matches){
        image.setAttribute('src', 'assets/technology/image-space-capsule-portrait.jpg');
    }
    else{
    image.setAttribute('src', 'assets/technology/image-space-capsule-landscape.jpg');
    }
})
