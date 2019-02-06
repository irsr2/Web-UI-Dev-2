let i = 0;
let images = [];
let time = 3000;




images[0] = '/ASSETS/Webp.net-resizeimage (1).jpg';
images[1] = '/ASSETS/adventure-ball-shaped-blur-346885.jpg';
images[2] = '/ASSETS/school-children.jpg';
images[3] = '/ASSETS/book-bookcase-books-1166657.jpg';



console.log(images);

function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}

window.onload = changeImg;



document.querySelector('#banner .button').addEventListener('mouseover', function () {
    document.querySelector('#banner .button').style.background = 'white';
});

