const express = require('express');
const { queryDatabase } = require("../db/postgres");
const { CATEGORIES_QUERY } = require("../db/queries");
const { formatCategories } = require("../db/helpers");
const router = express.Router();

router.get('/', function(req, res) {
  res.json([...'Welcome to the restaurant API'.split(' ')]);
});

router.get('/categories', async function (req, res) {
  const domain = req.protocol + '://' + req.get('host');
  const raw_categories = await queryDatabase(CATEGORIES_QUERY);
  res.json(formatCategories(raw_categories, domain));
});

router.post('/recommendation', function(req, res) {
  // TODO: use .h5 model to get recommendations depending on
  //  req.body.colors: string[] where string is like '#FFFFFF'
  res.json({
    recommendations: []
  });
});

module.exports = router;
