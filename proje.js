let slidePosition = 0; //slayt konumu 0
const slides = document.getElementsByClassName('carousel_item');
//hepsini biraraya topladık
const totalSlides = slides.length //3

document.getElementById('carousel_button--next')
.addEventListener("click" , function () {
    moveToNextSlide()
})

document.getElementById('carousel_button--prev')
.addEventListener("click" , function () {
    moveToPrevSlide()
})

function updateSlidePosition () {
    for(let slide of slides){//carousel ogesini gorurnur hale getirdiğimizde,biz de tum slaytlari gozden gecirecegiz

        slide.classList.remove('carousel_item--visible') //atlıkarınca oge gorunur
        slide.classList.add('carousel_item--hidden') //atlıkarınca oge gizli
        //gizli olanı ekle nasıl eklenecegini altta ki fonksiyonda belirledik
    }
    slides[slidePosition].classList.add('carousel_item--visible')
}

function moveToNextSlide () {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0 
    }else {
        slidePosition++
    }

    updateSlidePosition()
}

function moveToPrevSlide () {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    }else {
        slidePosition--
    }
    updateSlidePosition()
}
//joker 0, baby driver 1, sansür 2