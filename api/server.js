const express = require("express")
const mysql = require("mysql")

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '',
  // user: 'vizku_webconnect',
  // password: 'fRbo[giOL9Ht',
  database: 'itprdcpandb01.cc.ku.edu',
  insecureAuth : true,
  port: '3306'
})

  // host: 'itprdcpandb01.cc.ku.edu.',
  //76.70.83.66

connection.connect();

connection.query('SELECT * from Streamflow_Wichita', function (err, result, fields) {
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