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
    
    //create a request object
    
    var request = new XMLHttpRequest();
    
    //capture a response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
            //No action
        }
    };
    // Make a request
    request.open('GET', 'http://shubham-doneria.imad.hasura-app.io/', true);
    request.send(null);
};
    
    
    
    
