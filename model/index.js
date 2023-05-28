const { FLPORT } = require('../config');
const axios = require('axios');

async function getModelPredictions(colors) {
    const endpoint = `http://localhost:${ process.env.TFPORT || FLPORT }/predict`;
    const result = await axios.post(endpoint, {
        colors,
    });
    return result.data['predictions'];
}

module.exports = {
    getModelPredictions,
};