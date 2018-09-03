var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var main=require('./main');
var calc=main.calc;

/*var str1=new calc.stringExpession("str1");
str1.string="348+78*56-67*45-445/5"; 
str1.countSimple()           
console.log('str1.value='+str1.value);
console.log(calc.square(12));
*/

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : 'angular1976', //mysql database password
  database : 'mysql' //mysql database name  
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})
//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

app.use(express.static(__dirname + "/public"));

//create app server
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port);
  //console.log('example %s, %s', "pr1", 'pr2');

});

//rest api to get all customers
app.get('/customer', function (req, res) {
   //connection.query("SELECT id,word,transfer,grade FROM learn WHERE theme='english'", function (error, results, fields) {
	 connection.query("SELECT id, expression FROM expressionWords", function (error, results, fields) {
    if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});
