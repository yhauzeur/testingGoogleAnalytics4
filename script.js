let title = document.querySelector('h1');
let h2 = document.querySelector('h2');
const width = document.querySelector('#w');
const height = document.querySelector('#h');

title.innerText = "Apendiendo Javascript con Platzi";

// height.innerText = `${window.innerHeight} Pixel`;
// width.innerText = ` ${window.innerWidth} Pixels`;

const heightNew = height.innerText = `${document.documentElement.scrollHeight} Pixel`;
width.innerText = ` ${document.documentElement.scrollWidth} Pixels`;