const carouselTrack = document.querySelector('.carousel-track');
const items = Array.from(carouselTrack.children);

let totalWidth = items.reduce((sum, item) => sum + item.offsetWidth, 0);
const trackWidth = carouselTrack.offsetWidth;

while (totalWidth < trackWidth * 2) {
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carouselTrack.appendChild(clone);
        totalWidth += item.offsetWidth;
    });
}