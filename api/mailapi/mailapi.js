const express = require("express");
const router = express.Router();

fs = require('fs');

const file = '../../emails.txt';

router.post('/write', function (req, res) {
  console.log("req: ", req);
  fs.writeFileSync(file, req.content, { flag: 'a+'}, err => {
    console.error(err);
  });
});

module.exports = router