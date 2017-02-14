var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one':{
        title: 'First article | Shubham Sharma',
        heading: 'Article one',
        date: 'Feb 02 2017',
        content:`<p>
                   My name is Shubham Sharma. I am from jaipur. I have completed my engineering in 2017. I have a keen interest
                   in technological aspects of web developing. I first learned about html in class 10th. This was the most interesting
                   topics i have seen in development environment
                </p>
                <p>
                   My name is Shubham Sharma. I am from jaipur. I have completed my engineering in 2017. I have a keen interest
                   in technological aspects of web developing. I first learned about html in class 10th. This was the most interesting
                   topics i have seen in development environment
                </p>`
    },
    'article-two': {
        title: 'Second Article | Shubham Sharma',
        heading: 'Article two',
        date: 'Feb 05 2017',
        content: `<p>
                   My name is Shubham Sharma. I am from jaipur. This is my short and sweet article
                  </p>`
    },
    'article-three': {
        title: 'Third Article | Shubham Sharma',
        heading: 'Article third',
        date: 'Feb 03 2017',
        content: `<p>
                   I am pleased to write these wonderful articles. This is my third one.
                  </p>`
    }  
};
    

function createTemplate(data) {
   var title = data.title;
   var heading = data.heading;
   var date = data.date;
   var content = data.content;

var htmlTemplate = 
        `<html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
                <body> 
                <div class = "container">
                    <div>
                        <a href = '/'>Home</a>
                    </div>
                    <hr/>
                    
                    <div>
                        ${heading}
                    </div>
                    
                    <div>
                        ${date}
                    </div>
                    
                    <div>
                        ${content}
                    </div>
                </div>
                </body>
        </html>`
        ;
        return htmlTemplate;
    }

app.get('/:articleName', function (req, res) {
    //articleName == article-one,two,three
    //articles[articleName] == {} content object for article-one,two,three
   var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
