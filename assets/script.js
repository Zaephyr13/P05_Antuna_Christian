/** Constantes */
const slides = [
    {
        image: 'slide1.jpg',
        tagLine:
            'Impressions tous formats <span>en boutique et en ligne</span>',
    },
    {
        image: 'slide2.jpg',
        tagLine:
            'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
    },
    {
        image: 'slide3.jpg',
        tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
    },
    {
        image: 'slide4.png',
        tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
    },
]
/** Variables globales */
let cpt = 0
let tag_caroussel = document.querySelector('#banner .banner-img')
let tag_tagLine = document.querySelector('#banner p')
let arrow_left = document.querySelector('#banner .arrow_left')
let arrow_right = document.querySelector('#banner .arrow_right')
let tag_dots = document.querySelector('#banner .dots')
let content = ''

/** Create HTML dots */
for (let index = 0; index < slides.length; index++) {
    content = content + '<div class="dot"></div>'
}
tag_dots.innerHTML = content

/** Init dot and slide */
let tag_dot = document.querySelectorAll('#banner .dot')
tag_caroussel.src = './assets/images/slideshow/' + slides[cpt].image
tag_tagLine.innerHTML = slides[cpt].tagLine
tag_dot[cpt].classList.add('dot_selected')

/** Slide on arrow click */
arrow_left.onclick = function () {
    cpt--
    if (cpt < 0) {
        cpt = 3
        tag_caroussel.src = './assets/images/slideshow/' + slides[cpt].image
        tag_tagLine.innerHTML = slides[cpt].tagLine
        tag_dot[cpt].classList.add('dot_selected')
        tag_dot[cpt - 3].classList.remove('dot_selected')
    } else {
        tag_caroussel.src = './assets/images/slideshow/' + slides[cpt].image
        tag_tagLine.innerHTML = slides[cpt].tagLine
        tag_dot[cpt + 1].classList.remove('dot_selected')
        tag_dot[cpt].classList.add('dot_selected')
    }
}

arrow_right.onclick = function () {
    cpt++
    if (cpt > 3) {
        cpt = 0
        tag_caroussel.src = './assets/images/slideshow/' + slides[cpt].image
        tag_tagLine.innerHTML = slides[cpt].tagLine
        tag_dot[cpt].classList.add('dot_selected')
        tag_dot[cpt + 3].classList.remove('dot_selected')
    } else {
        tag_caroussel.src = './assets/images/slideshow/' + slides[cpt].image
        tag_tagLine.innerHTML = slides[cpt].tagLine
        tag_dot[cpt - 1].classList.remove('dot_selected')
        tag_dot[cpt].classList.add('dot_selected')
    }
}
