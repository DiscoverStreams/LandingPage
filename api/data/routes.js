const express = require("express");
const router = express.Router();

const fetchData = require("./index.js");

router.get('/getIrrigationData', async function (req, res) {
  // console.log("req: ", req.body);
  try {
    const data = await fetchData(0);
    // res.send("Status 200, OK")
    res.send(data);
    return data;
  } catch (error) {
    console.error(error);
  }  
});

router.get('/getStreamflowData', async function (req, res) {
  // console.log("req: ", req.body);
  try {
    const data = await fetchData(1);
    // res.send("Status 200, OK")
    res.send(data);
    return data;
  } catch (error) {
    console.error(error);
  }  
});


module.exports = router