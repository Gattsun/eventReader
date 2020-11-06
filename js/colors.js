
const figure = document.getElementById('figure');
const colors = ['red', 'blue', 'green', 'gray', 'darkcyan'];

function paintMe(){
    let rnd = Math.floor((Math.random() * colors.length-1) + 1);
    console.log(rnd);
    figure.style.background = colors[rnd];
}