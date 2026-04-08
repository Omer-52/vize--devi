document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.background-slideshow img');
    let currentImageIndex = 0;

    function changeImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

  
    if (images.length > 0) {
        images[0].classList.add('active');
    }

    
    function animateSkillBars() {
        const skillProgressBars = document.querySelectorAll('.skill-progress');
        skillProgressBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            if (level) {
                bar.style.width = level + '%'; 
            }
        });
    }

    animateSkillBars(); 
    setInterval(changeImage, 5000); 
});