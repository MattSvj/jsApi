document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg'
    ];
    

    let currentImageIndex = 0;
    const totalImages = images.length;

    const imageElement = document.querySelector('.slider-image img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.slider-dots .dot');

    function showImage(index) {
        imageElement.src = images[index];
        updateActiveDot(index);
    }

    function updateActiveDot(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showImage(currentImageIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentImageIndex = index;
            showImage(currentImageIndex);
        });
    });


    showImage(currentImageIndex);
});
