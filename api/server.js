const express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")

const mailapi = require('./mailapi/mailapi')
const dataAPI = require('./data/routes')

const app = express()
app.use(bodyParser.json())
const PORT = 5000
// const connection = mysql.createConnection({
//   host: 'itprdcpandb01.cc.ku.edu',
//   user: 'interact_webuser', 
//   password: 'MB!aS])Baizr',
//   // database: 'interact_CyanoHABs',
//   insecureAuth : true,
//   // port: '3306'
// })

const connection = mysql.createConnection({
  host     : 'itprdcpandb01.cc.ku.edu',
  user     : 'interact_webuser',
  password :  'MB!aS])Baizr',
  database : 'interact_CyanoHABs',
  port:3306
});

const sql = 'SELECT * from Parameters'
connection.connect(function(err) {
  if (err) throw(err);
  console.log("Connected!");
});



// connection.query('SELECT * from Parameters', function (err, result, fields) {
//   if (err) {
//     console.error(err);
//   }
//   console.log('the solution is: ');
//   console.log(result);
// })

app.get('/db-test', (req, res, next) => {

  // let sql = `SELECT * from Parameters`;

  console.log(sql); // confirm you are sending the sql request you believe you should be sending

  connection.query(sql, function (err, results, fields) {
      if (err) console.error(err);
      console.log(`results: ${results}\nfields: ${fields}`);
  });

});


connection.end()



app.use('/', dataAPI)

app.use('/mailapi', mailapi)

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))



// Create an instance of the http server to handle HTTP requests
// let app = http.createServer((req, res) => {
//   // Set a response type of plain text for the response
//   res.writeHead(200, {'Content-Type': 'text/plain'});

//   // Send back a response and end the connection
//   //res.end('Hello World!\n'); // comment this line   
//   con.connect(function(err) {
//     if (err) {
//       console.error(err);
//     };
    
//   }); 
//   con.query('SELECT * FROM Parameters', (err,rows) => {
//     if(err) throw err;
  
//     console.log('Data received from Db:');
//     console.log(rows);
//   });
    
// });

// con.connect();

// con.query("SELECT * FROM 'Parameters'", function (err, result, fields) {
//   if (err) {
//     console.error(err);
//   }
//   console.log('the solution is: ');
//   console.log(result);
// })

// // Start the server on port 3000
// app.listen(3000, '127.0.0.1');
// console.log('Node server running on port 3000');