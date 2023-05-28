const { Pool } = require('pg');
const { PGPORT } = require('../config');

const pool = new Pool({
    user: process.env.PGUSERNAME,
    host: 'localhost',
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT || PGPORT,
});

async function queryDatabase(query, vars = []) {
    let result, client;
    try {
        client = await pool.connect();
        result = await client.query(query, vars);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        client?.release();
    }
    return result.rows;
}

module.exports = {
    queryDatabase,
};