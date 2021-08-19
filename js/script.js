// NavBar Change on Scroll
const navBar=document.getElementById("website-navbar");
const logo_image=document.querySelector("#website-navbar .navbar-brand img");
const mainNavBarLinks=document.querySelectorAll("#website-navbar .nav-link");
const navIcons=document.querySelectorAll("#website-navbar .social-container i");
console.log(navIcons);
window.onscroll=function (){
let top=window.scrollY;
console.log(top);
if(top>=100){
    navBar.classList.add("bg-light");
    navBar.classList.remove("navbar-dark");
    navBar.classList.add("navbar-light");
    logo_image.src="images/logo-red.png"
    mainNavBarLinks.forEach((listItem)=>listItem.classList.add("dark-links"));
    navIcons.forEach((icon)=>icon.classList.remove("white-icons"));
    navIcons.forEach((icon)=>icon.classList.add("dark-icons"));
}else{
    navBar.classList.remove("bg-light");
    navBar.classList.remove("navbar-light");
    navBar.classList.add("navbar-dark");
    logo_image.src="images/logo-white.png"
    mainNavBarLinks.forEach((listItem)=>listItem.classList.remove("dark-links"));
    navIcons.forEach((icon)=>icon.classList.remove("dark-icons"));
    navIcons.forEach((icon)=>icon.classList.add("white-icons"));
    }
}




const carouselInner=document.querySelector("#home .carousel-inner");
const myCarousel = document.getElementById('carouselExampleInterval')
let className="";
myCarousel.addEventListener('slide.bs.carousel', function (event) {
    className="home-item-"+(event.to+1);
    carouselInner.classList.add(className);
    className="home-item-"+(event.from+1);
    carouselInner.classList.remove(className);
})



const centerIndex=4;
const gallery=document.getElementById("gallery");
let carouselItems = document.querySelectorAll('#gallery .my-card');
const qoutes=document.getElementById("qoutes");
let clientsQoute=document.querySelectorAll('#qoutes .client-qoute');

function myCardEventHandler(carouselItem){
    carouselItems.forEach(function(item){
        item.classList.remove("active");
    })
    clientsQoute.forEach(function(item){
        item.classList.remove("active");
    })
    carouselItem.classList.add("active");
    const clickedIndex=Array.prototype.indexOf.call(carouselItems, carouselItem);
    clientsQoute[clickedIndex].classList.add("active");
    if(clickedIndex>centerIndex){
        if(clickedIndex-centerIndex===1){//click item after center by one
            const newCard=carouselItems[0].cloneNode(true);
            newCard.addEventListener("click",myCardEventHandler.bind(this,newCard));
            gallery.removeChild(carouselItems[0])
            gallery.appendChild(newCard);
            const newQoute=clientsQoute[0].cloneNode(true);
            qoutes.removeChild(clientsQoute[0])
            qoutes.appendChild(newQoute)
            console.log(gallery);
        }else if(clickedIndex-centerIndex===2){//click item after center by two
            const newCard=carouselItems[0].cloneNode(true);
            newCard.addEventListener("click",myCardEventHandler.bind(this,newCard));
            const newCard2=carouselItems[1].cloneNode(true);
            newCard2.addEventListener("click",myCardEventHandler.bind(this,newCard2));
            gallery.removeChild(carouselItems[0])
            gallery.appendChild(newCard);
            gallery.removeChild(carouselItems[1])
            gallery.appendChild(newCard2);
            const newQoute=clientsQoute[0].cloneNode(true);
            const newQoute2=clientsQoute[1].cloneNode(true);
            qoutes.removeChild(clientsQoute[0])
            qoutes.appendChild(newQoute);
            qoutes.removeChild(clientsQoute[1])
            qoutes.appendChild(newQoute2);
            console.log(gallery);
        }
    }else if(clickedIndex<centerIndex){
        if(centerIndex-clickedIndex===1){//click item before center by one
            const newCard=carouselItems[carouselItems.length-1].cloneNode(true);
            newCard.addEventListener("click",myCardEventHandler.bind(this,newCard));
            gallery.removeChild(carouselItems[carouselItems.length-1]);
            gallery.prepend(newCard);
            const newQoute=clientsQoute[clientsQoute.length-1].cloneNode(true);
            qoutes.removeChild(clientsQoute[clientsQoute.length-1]);
            qoutes.prepend(newQoute);
            console.log(gallery);
        }else if(centerIndex-clickedIndex===2){//click item before center by two
            const newCard=carouselItems[carouselItems.length-1].cloneNode(true);
            newCard.addEventListener("click",myCardEventHandler.bind(this,newCard));
            const newCard2=carouselItems[carouselItems.length-2].cloneNode(true);
            newCard2.addEventListener("click",myCardEventHandler.bind(this,newCard2));
            gallery.removeChild(carouselItems[carouselItems.length-1]);
            gallery.prepend(newCard);
            gallery.removeChild(carouselItems[carouselItems.length-2]);
            gallery.prepend(newCard2);
            const newQoute=clientsQoute[clientsQoute.length-1].cloneNode(true);
            const newQoute2=clientsQoute[clientsQoute.length-2].cloneNode(true);
            qoutes.removeChild(clientsQoute[clientsQoute.length-1]);
            qoutes.prepend(newQoute);
            qoutes.removeChild(clientsQoute[clientsQoute.length-2]);
            qoutes.prepend(newQoute2);
            console.log(gallery);
        }
    }
    carouselItems = document.querySelectorAll('#gallery .my-card');
    clientsQoute=document.querySelectorAll('#qoutes .client-qoute');
}

carouselItems.forEach(function(carouselItem){
    carouselItem.addEventListener('click',myCardEventHandler.bind(this,carouselItem))
})

