window.onload = function() {
const images = ['images/top-bg/ps-background.webp', 'images/top-bg/playstation-games-bg.png', 'images/top-bg/gow-bg.jpg'];
const slide = document.querySelector('.slide img');
const prev_btn = document.querySelector('.prev');
const next_btn = document.querySelector('.next');
let current_image_index = 0;
let timer;

function show_image(index) {
  slide.src = images[index];
}

function prev_image() {
    clearInterval(timer);
    current_image_index--;
    if (current_image_index < 0) {
        current_image_index = images.length - 1;
    }
    show_image(current_image_index);
    timer = setInterval(next_image, 3000);
}

function next_image() {
    clearInterval(timer);
    current_image_index++;
    if (current_image_index >= images.length) {
        current_image_index = 0;
    }
    show_image(current_image_index);
    timer = setInterval(next_image, 3000);
}

prev_btn.addEventListener('click', prev_image);
next_btn.addEventListener('click', next_image);

timer = setInterval(next_image, 3000);

}