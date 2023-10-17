const displayedImage = document.getElementById('displayedImage');
const changeImageButton = document.getElementById('changeImageButton');

const imageArray = [
    'images/QUOTE.jpg',
    'images/quote2.jpg',
    'images/quote3.jpg',
    'images/quote4.png'
];

let currentIndex = 0;

changeImageButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageArray.length;
    const nextImage = imageArray[currentIndex];
    displayedImage.src = nextImage;
});

