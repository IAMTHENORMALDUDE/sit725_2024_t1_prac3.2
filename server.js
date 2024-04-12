var express = require('express');
var app = express();
app.use(express.static('public_html'));

app.use(express.json()); 
app.use(express.urlencoded({
    extended: false
}));

app.listen(3000, function(){
    console.log("Web server running at: http://localhost:3000/addTwoNumbers");
    console.log("Type Ctrl+C to shut down the web server");
});