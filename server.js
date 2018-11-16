'use strict'
console.log('Hello Starting NodeAppdemo Server');

var cors =require('cors');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Login =require('./api/models/loginModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mymongo:27017/mydb'); 


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes =require('./api/routes/loginRoutes');

routes(app); //register the route

app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});
console.log('RESTful API server started on: ' + port);

