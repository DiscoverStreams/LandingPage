const express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")

const mailapi = require('./mailapi/mailapi')

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root', 
//   password: '',
//   // user: 'vizku_webconnect',
//   // password: 'fRbo[giOL9Ht',
//   database: 'itprdcpandb01.cc.ku.edu',
//   insecureAuth : true,
//   port: '3306'
// })

//   // host: 'itprdcpandb01.cc.ku.edu.',
//   //76.70.83.66

// connection.connect();

// connection.query('SELECT * from Streamflow_Wichita', function (err, result, fields) {
//   if (err) {
//     console.error(err);
//   }
//   console.log('the solution is: ');
//   console.log(result);
// })

// connection.end()

const app = express()
app.use(bodyParser.json())
const PORT = 5000

const apiURL = 'https://interactiveviz.ku.edu/DiscoverWater/Hamilton_WaterUseIrrigateation_AnnualSummary.json'

app.get('/api', (req, res) => res.send('Hello World'))

app.use('/api/mailapi', mailapi)

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))