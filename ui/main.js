console.log('Loaded!');
// move the image
var img = document.getElementById("hasura");
function moveRight() {
var marginLeft = 0;
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 10);
};