let slideIndex = 1;
let autoSlide;

// Inicia o carrossel após o carregamento da página
window.onload = function() {
    showSlides(slideIndex);
    resetTimer();
};

function plusSlides(n) {
    showSlides(slideIndex += n);
    resetTimer();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetTimer();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove classe ativa de todos os dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Mostra o slide atual e ativa o dot correspondente
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    }
}

function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(function() {
        plusSlides(1);
    }, 5000); // Muda a cada 5 segundos
}