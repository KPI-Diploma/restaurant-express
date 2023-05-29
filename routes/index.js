const express = require('express');
const { queryDatabase } = require('../db/postgres');
const { CATEGORIES_QUERY, DISHES_QUERY } = require('../db/queries');
const { formatCategories, formatPredictions, formatDishes } = require('../helpers');
const { getModelPredictions } = require('../model');
const router = express.Router();

router.get('/', function (req, res) {
    res.json([...'Welcome to the restaurant API'.split(' ')]);
});

router.get('/categories', async function (req, res) {
    const domain = req.protocol + '://' + req.get('host');
    try {
        const raw_categories = await queryDatabase(CATEGORIES_QUERY);
        res.status(200).json(formatCategories(raw_categories, domain));
    } catch (e) {
        res.status(400).send({
            message: e.message,
        });
    }
});

router.post('/recommendation', async function (req, res) {
    const domain = req.protocol + '://' + req.get('host');
    try {
        const predictions = formatPredictions(await getModelPredictions(req.body.colors));
        const raw_dishes = await queryDatabase(DISHES_QUERY, [predictions]);
        res.status(200).json(formatDishes(raw_dishes, domain));
    } catch (e) {
        res.status(400).send({
            message: e.message,
        });
    }
});

module.exports = router;
