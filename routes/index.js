const express = require('express');
const router = express.Router();

router.get('/categories', function(req, res) {
  // TODO: use postgres database to query list of categories
  //  and dishes that correspond to them
  res.json({
    categories: []
  });
});

router.post('/recommendation', function(req, res) {
  // TODO: use .h5 model to get recommendations depending on
  //  req.body.colors: string[] where string is like '#FFFFFF'
  res.json({
    recommendations: []
  });
});

module.exports = router;
