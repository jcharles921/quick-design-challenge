document.addEventListener("DOMContentLoaded", function() {
    const imgContainers = document.querySelectorAll('.imgContainer');
    const images = [
        "./assets/Fox.jpg",
        "./assets/Whale.jpg",
        "./assets/Baboon.jpg",
        "./assets/Deer.jpg"
    ];

    imgContainers.forEach((container, index) => {
        container.style.backgroundImage = `url('${images[index]}')`;
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";
        container.style.backgroundRepeat = "no-repeat";
    });
});
