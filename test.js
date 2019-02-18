const addSlides = [...document.getElementsByClassName('wrap')];

addSlides.forEach(elem => {               
  const maxValueSlide = [...elem.querySelectorAll('img')];
  const currentLeftArrow = elem.querySelector('.wrap__arrow_left');    
  const currentRightArrow = elem.querySelector('.wrap__arrow_right');  
  let currentSlidesValue = 0;  

  currentLeftArrow.addEventListener('click', () => {    
    reset(maxValueSlide);   

    if (currentSlidesValue === 0) {
      currentSlidesValue = maxValueSlide.length;
    }   
      maxValueSlide[currentSlidesValue - 1].style.display = 'block';
      currentSlidesValue--;
    });

  currentRightArrow.addEventListener('click', () => {      
    reset(maxValueSlide);

    if (currentSlidesValue === maxValueSlide.length - 1) {
      currentSlidesValue = -1;
    }
      maxValueSlide[currentSlidesValue + 1].style.display = 'block';
      currentSlidesValue++;
  });  
})

function reset(slidesArray) {    
  slidesArray.forEach( elem => elem.style.display = 'none');    
}