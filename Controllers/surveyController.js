const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.json({"message": "GET survey"})
  })

module.exports = router;