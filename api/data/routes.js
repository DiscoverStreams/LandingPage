const express = require("express");
const router = express.Router();

const fetchData = require("./index.js");

router.get('/getData', async function (req, res) {
  // console.log("req: ", req.body);
  try {
    const data = await fetchData(req.query.index);
    // res.send("Status 200, OK")
    res.send(data);
    return data;
  } catch (error) {
    console.error(error);
  }  
});



module.exports = router