const express = require("express")
const app = express()
const PORT = 5000

const apiURL = 'https://interactiveviz.ku.edu/DiscoverWater/Hamilton_WaterUseIrrigateation_AnnualSummary.json'

app.get('/', (req, res) => res.send('Hello World'))

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))