let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showSlide(index) {                     //index is a paramaeter , you can name it whatever
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');     //you can use (.toggle) insted of (.add)
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}

// Auto slide every 3 seconds
// setInterval(nextSlide, 3000);
