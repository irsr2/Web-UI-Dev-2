let i = 0;
let images = [];
let time = 3000;



images[0] = '/ASSETS/Webp.net-resizeimage (6).jpg';
images[1] = '/ASSETS/Webp.net-resizeimage (1).jpg';
images[2] = '/ASSETS/accessories-africa-bracelets-1667850.jpg';
images[3] = '/ASSETS/Webp.net-resizeimage (1).jpg';
images[4] = '/ASSETS/Webp.net-resizeimage (6).jpg';


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