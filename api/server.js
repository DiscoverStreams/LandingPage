const express = require("express")
const mysql = require("mysql")

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'vizku_webconnect',
  password: 'F-9hZ#Q8G}c{',
  database: 'vizku_water',
  port: '3306'
})

connection.connect();

connection.query('SELECT *', function (err, result, fields) {
  if (err) {
    console.error(err);
  }
  console.log('the solution is: ');
  console.log(result);
})

connection.end()

const app = express()
const PORT = 5000

const apiURL = 'https://interactiveviz.ku.edu/DiscoverWater/Hamilton_WaterUseIrrigateation_AnnualSummary.json'

app.get('/', (req, res) => res.send('Hello World'))

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))