const outerdiv = document.getElementById('outerdiv');
const openmenu = document.querySelector('.menuopen');
const closemenu = document.querySelector('.closemenu');
const navbar = document.querySelector('.navbar');
const image = document.getElementById('planetimage');
const planetname = document.querySelector('.planetname');
const description = document.querySelector('.planetdescription');
const distance = document.querySelector('.avg');
const time = document.querySelector('.time');
const moon = document.getElementById('moon');
const mars = document.getElementById('mars');
const europa = document.getElementById('europa');
const titan = document.getElementById('titan');
mars.style.borderBottom = "2px solid white";
    mars.style.height = "90%";
    mars.style.alignItems = "center";
    mars.style.display = "flex";
openmenu.addEventListener('click', () => {
    navbar.classList.remove('hidden');
})
closemenu.addEventListener('click', () => {
    navbar.classList.add('hidden');
})
moon.addEventListener('click', () => {
    planetname.innerHTML = "moon";
    description.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    distance.innerHTML = "384,400 km";
    time.innerHTML = "3 days";
    image.setAttribute("src", "assets/destination/image-moon.png")
    moon.style.borderBottom = "2px solid white";
    moon.style.height = "90%";
    moon.style.alignItems = "center";
    moon.style.display = "flex";
    europa.style.borderBottom = "initial";
    europa.style.height = "initial";
    europa.style.alignItems = "initial";
    europa.style.display = "initial";
    mars.style.borderBottom = "initial";
    mars.style.height = "initial";
    mars.style.alignItems = "initial";
    mars.style.display = "initial";
    titan.style.borderBottom = "initial";
    titan.style.height = "initial";
    titan.style.alignItems = "initial";
    titan.style.display = "initial";
})
mars.addEventListener('click', () => {
    planetname.innerHTML = "mars";
    description.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    distance.innerHTML = "225 mil.km";
    time.innerHTML = " 9 months";
    image.setAttribute("src", "assets/destination/image-mars.png")
    mars.style.borderBottom = "2px solid white";
    mars.style.height = "90%";
    mars.style.alignItems = "center";
    mars.style.display = "flex";
    moon.style.borderBottom = "initial";
    moon.style.height = "initial";
    moon.style.alignItems = "initial";
    moon.style.display = "initial";
    titan.style.borderBottom = "initial";
    titan.style.height = "initial";
    titan.style.alignItems = "initial";
    titan.style.display = "initial";
})
europa.addEventListener('click', () => {
    planetname.innerHTML = "europa";
    description.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    distance.innerHTML = "628 mil. km";
    time.innerHTML = "3 years";
    image.setAttribute("src", "assets/destination/image-europa.png")
    europa.style.borderBottom = "2px solid white";
    europa.style.height = "90%";
    europa.style.alignItems = "center";
    europa.style.display = "flex";
    moon.style.borderBottom = "initial";
    moon.style.height = "initial";
    moon.style.alignItems = "initial";
    moon.style.display = "initial";
    mars.style.borderBottom = "initial";
    mars.style.height = "initial";
    mars.style.alignItems = "initial";
    mars.style.display = "initial";
    titan.style.borderBottom = "initial";
    titan.style.height = "initial";
    titan.style.alignItems = "initial";
    titan.style.display = "initial";
})
titan.addEventListener('click', () => {
    planetname.innerHTML = "titan";
    description.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    distance.innerHTML = " 1.6 bil. km ";
    time.innerHTML = "7 years";
    image.setAttribute("src", "assets/destination/image-titan.png")
    titan.style.borderBottom = "2px solid white";
    titan.style.height = "90%";
    titan.style.alignItems = "center";
    titan.style.display = "flex";
    moon.style.borderBottom = "initial";
    moon.style.height = "initial";
    moon.style.alignItems = "initial";
    moon.style.display = "initial";
    europa.style.borderBottom = "initial";
    europa.style.height = "initial";
    europa.style.alignItems = "initial";
    europa.style.display = "initial";
    mars.style.borderBottom = "initial";
    mars.style.height = "initial";
    mars.style.alignItems = "initial";
    mars.style.display = "initial";
})