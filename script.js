document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.background-slideshow img');
    let currentImageIndex = 0;

    function changeImage() {
        // Eğer hiç resim yoksa fonksiyonu çalıştırma
        if (images.length === 0) return;

        images[currentImageIndex].classList.remove('active');

       
        currentImageIndex = (currentImageIndex + 1) % images.length;

     
        images[currentImageIndex].classList.add('active');
    }

    // Sayfa yüklendiğinde ilk resmi aktif yap (HTML'de de yapıldı ama emin olmak için)
    if (images.length > 0) {
        images[0].classList.add('active');
    }

    // Her 5 saniyede bir resmi değiştir (5000 milisaniye = 5 saniye)
    setInterval(changeImage, 5000); 
});
