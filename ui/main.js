console.log('Loaded!');
// move the image
var img = document.getElementById("hasura");
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
};