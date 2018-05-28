require('./server/config/mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require("path");
app.use(express.static(path.join(__dirname, './helloAngular/dist/helloAngular')));

require('./server/config/routes.js')(app);

//Setting our server to listen on port: 8000
app.listen(8000, function(){
    console.log("listening on port 8000");
})

