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
var button = document.getElementById("counter");

button.onclick = function() {
    
    //create a request object
    
    var request = new XMLHttpRequest();
    
    //capture a response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
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
    request.open('GET', 'http://shubham-doneria.imad.hasura-app.io/c/counter', true);
    request.send(null);
};

// submit name
var nameInput = document.getElementById("name");

var submit = document.getElementById("submit_btn");
submit.onclick = function() {
    //make a request to the server and the send the name
    //create a request object
    
    var request = new XMLHttpRequest();
    
    //capture a response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list ='';
                for(var i = 0; i < names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list; 
            }
            //No action
        }
    };
    // Make a request
    var name = nameInput.value;
    request.open('GET', 'http://shubham-doneria.imad.hasura-app.io/submit-name?=name=' + name, true);
    request.send(null);
    //capture a list of names and render it as a list
   
    
};


    
    
    
    
