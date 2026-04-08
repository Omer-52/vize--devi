document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.background-slideshow img');
    let currentImageIndex = 0;

    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

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

    // Function to set the theme and update button icon
    function setTheme(theme) {
        body.dataset.theme = theme;
        localStorage.setItem('theme', theme);
       
        if (theme === 'dark') {
            themeToggleButton.innerHTML = '☀️'; 
            themeToggleButton.setAttribute('aria-label', 'Switch to light theme');
        } else {
            themeToggleButton.innerHTML = '🌙'; 
            themeToggleButton.setAttribute('aria-label', 'Switch to dark theme');
        }
    }

  
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('dark'); 
    }

    themeToggleButton.addEventListener('click', function() {
        const currentTheme = body.dataset.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});