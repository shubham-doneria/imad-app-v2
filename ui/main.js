console.log('Loaded!');

// move the image
var img = document.getElementById("profile");
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 0.5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 30);
};

// counter code
var counter = 0;
var button = document.getElementById("counter");

button.onclick = function() {
    
    //make a request to the counter endpoint
    
    //capture a response and store it in a variable
    
    //render the variable in the current span
    
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};
