let slide = [...document.querySelectorAll('.slide')];
let arrowLeft = document.querySelector('.wrap__arrow_left');
let arrowRight = document.querySelector('.wrap__arrow_right');
let current = 0;

function reset() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
}

function slideLeft() {
    reset();
    slide[current - 1].style.display = 'block';
    current--;
}

function slideRight() {
    reset();
    slide[current + 1].style.display = 'block';
    current++;
}


arrowLeft.addEventListener('click', function() {
    if (current === 0) {
        current = slide.length;
    }

    slideLeft();
});

arrowRight.addEventListener('click', function() {
    if (current === slide.length - 1) {
        current = -1;
    }

    slideRight();
});

slide.map(function(elem) {
    console.log(elem);
});