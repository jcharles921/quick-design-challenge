document.addEventListener("DOMContentLoaded", function() {
    const imgContainers = document.querySelectorAll('.imgContainer');
    const images = [
        "./assets/Fox.jpg",
        "./assets/Whale.jpg",
        "./assets/Baboon.jpg",
        "./assets/Deer.jpg"
    ];

    imgContainers.forEach((container, index) => {
        const imgElement = document.createElement('div');
        imgElement.classList.add('bgImage');
        imgElement.style.backgroundImage = `url('${images[index]}')`;
        container.appendChild(imgElement);
    });
});
