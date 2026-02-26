let images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slideshow').src = images[currentIndex];
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('slideshow').src = images[currentIndex];
}
