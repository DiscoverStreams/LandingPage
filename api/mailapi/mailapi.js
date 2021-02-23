const express = require("express");
const router = express.Router();

fs = require('fs');

const file = '../emails.txt';

router.post('/write', function (req, res) {
  fs.writeFileSync(file, req.body.content + "\n", { flag: 'a+'}, err => {
    if (err) {
      console.error("error", err);
      res.send("Status Fuck Knows");
    }else {
      res.send("Status 200");
    }
  });
});


module.exports = router