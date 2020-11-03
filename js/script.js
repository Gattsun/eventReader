console.log("Hello from script file");

const images = ["img/pic1.jpg", "img/pic2.jpg", "img/pic4.jpg", "img/pic5.jpg", "img/pic6.jpg", "img/pic7.jpg", "img/pic8.jpg"];

const imageToChange = document.getElementById("image");

function changeImage(){
    console.log("button clicked!");
    let rnd = Math.floor((Math.random() * images.length-1) + 1);
    console.log(rnd);
    imageToChange.src = images[rnd];
}