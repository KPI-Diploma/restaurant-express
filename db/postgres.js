const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PGUSERNAME,
    host: 'localhost',
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: 5432,
});

async function queryDatabase(query) {
    let result, client;
    try {
        client = await pool.connect();
        result = await client.query(query);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        client?.release();
    }
    return result.rows;
}

module.exports = {
    queryDatabase
};