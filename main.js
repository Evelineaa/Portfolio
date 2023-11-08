document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector("#Homee-button");
    
    button.addEventListener('click', function() {
        window.location.href='/portfolio/';
     });
    });


document.addEventListener('DOMContentLoaded', function() {
var button = document.querySelector("#Work-button");

button.addEventListener('click', function() {
    window.location.href='/portfolio/work.html';
 });
});

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector("#Education-button");
        
    button.addEventListener('click', function() {
        window.location.href='/portfolio/education.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
const linkedinButton = document.querySelector("#linkedin_button");
const githubButton = document.querySelector("#github_button");

const linkedinURL = "https://www.linkedin.com/in/millapohjolainen";
const githubURL = "https://github.com/Evelineaa";

linkedinButton.addEventListener("click", () => {
    window.location.href = linkedinURL;
});

githubButton.addEventListener("click", () => {
    window.location.href = githubURL;
});
});

    
window.onscroll = function() {myFunction()};

function myFunction() {
    var topBar = document.getElementById(".topBar");
    var sticky = topBar.offsetTop;

    if(window.scrollY >= sticky) {
        topBar.classList.add('sticky');
   }else {
        topBar.classList.remove('sticky');
    }

    window.addEventListener('resize', function() {
        sticky = topBar.offsetTop;
    });
}
   
    setTimeout(bubble, 6000);

    function bubble() {
        var bubble = document.querySelector(".bubble");
        bubble.style.display = "block";

    setTimeout(function() {
        bubble.style.display = "none";
    }, 3000);
  }

  document.addEventListener("DOMContentLoaded", function () {
    let slidePosition = 0;
    const slides = document.getElementsByClassName('photo');
    const totalSlides = slides.length;

    document.getElementById('buttonne--next').addEventListener('click', function() {
        moveToNextSlide();
    });

    document.getElementById('buttonpr--prev').addEventListener('click', function() {
        moveToPrevSlide();
    });

        function updateSlidePosition() {
        for (let slide of slides) {
            slide.classList.remove ('photo--visible');
            slide.classList.add ('photo--hidden');
        }
        slides[slidePosition].classList.add('photo--visible');
    }

        function moveToNextSlide() {
        if (slidePosition === totalSlides - 1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        updateSlidePosition();
    }

    function moveToPrevSlide() {
        updateSlidePosition();
        if (slidePosition === 0) {
            slidePosition = totalSlides - 1;
        } else {
            slidePosition--;
        }
        updateSlidePosition();
    }
    
  });
