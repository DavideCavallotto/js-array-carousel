// # Dato un array contenente una lista di cinque immagini, creare un carosello 

// - creo un Array contenente 5 immagini
    // - inserisco le immagini fornite all'interno dell' Array
const carousel = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

// - recupero dal DOM la classe 'carousel-container'
const carouselDOMElement = document.querySelector('.carousel-container')
console.log(carouselDOMElement)
// - creo un ciclo for per aggiungere le immagini dell'Array all'html
for (let i = 0; i < carousel.length; i++) {
    const currentSrc = carousel[i];    

    const htmlString = `
    <div class="image">
        <img src="${currentSrc}">
    </div>
    `
    console.log(htmlString);
    carouselDOMElement.innerHTML += htmlString;
}

// - recupero la lista di nodi dal DOM
let imageDOMElements = document.getElementsByClassName('image');
console.log('imageDOMElements', imageDOMElements);
// - do al primo elemento la classe active
let activeSrc = imageDOMElements[0];
activeSrc.classList.add('active');

// - recupero il bottone dal DOM
const downButtonDOMElement = document.getElementById('down-button');

let indexCurrentImage = 0;
let imageLength = imageDOMElements.length;


downButtonDOMElement.addEventListener ('click',function () {  
    imageDOMElements[indexCurrentImage].classList.remove('active');          
    indexCurrentImage++;
      
    if (indexCurrentImage >= imageLength) {
        indexCurrentImage = 0;                
    }

    imageDOMElements[indexCurrentImage].classList.add('active');
    

    console.log(indexCurrentImage);    


})

const upButtonDOMElement = document.getElementById('up-button');

upButtonDOMElement.addEventListener ('click',function () {  
    imageDOMElements[indexCurrentImage].classList.remove('active');          
    indexCurrentImage--;
    
    if (indexCurrentImage < 0) {
        indexCurrentImage = imageLength - 1;                
    }
    
    imageDOMElements[indexCurrentImage].classList.add('active');
    console.log(imageDOMElements, 'imageDOMElements')

    console.log(indexCurrentImage);    


})





