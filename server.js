var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
  user: 'akjain6750',
  database: 'akjain6750', 
  password: proccess.emp.DB_PASSWORD, 
  host: 'db.imad.hasura-app.io',
  port:'5432'
};

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one' :{
       title: 'article one\ Akshat jain',
 heading:'article one',
    date:'2 march 2017',
    content: {
         <p>
                    this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.
        </p>
                 <p>
                    this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.
                </p>
                 <p>
                    this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.this is the sontent of first article.
                </p> }
},
 'article-two' :{
       title: 'article two\ Akshat jain',
        heading:'article two',
    date:'3 march 2017',
    content: "
         <p>
                    this is the content of my second article..
         </p>"
},
 'article-three' :{
       title: 'article three\ Akshat jain',
 heading:'article three',
    date:'4 march 2017',
    content: "
         <p>
                    this is the content of my third article..
                </p>"
}
};

 function createtemplate(data){
  var title=data.title;
  var date=data.date;
  var heading=data.heading;
  var content=data.content;
  
  var htmltemplate = {
  <html>
  <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
        <div>
            <a href='/'>home</a>
        <hr/>
        <h3>
         ${heading}
         </h3>
        <div>
            ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>    
    </body>
</html>
 };

return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
var articleName = req.paroms.articleName;
  res.send(createtemplate(articles[articlesName]));
});
});

var pool=new Pool(config);
app.get('/test-db',function(req,res)){
pool.query('SELECT * FROM test',function(err,result){
    if(err){
        res.status(500),send(error,testString())
    }
    else{
        res.send(150n,stringify(result));
    }
});
});
    }
    }
}
)
    
});
}
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
