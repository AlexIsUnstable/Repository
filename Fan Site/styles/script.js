const displayedImage = document.getElementById('displayedImage');
const changeImageButton = document.getElementById('changeImageButton');

const imageArray = [
    'quote1.jpg',
    'quote2.jpg',
    'quote3.jpg',
    'quote4.png'
];

let currentIndex = 0;

changeImageButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageArray.length;
    const nextImage = imageArray[currentIndex];
    displayedImage.src = nextImage;
});

