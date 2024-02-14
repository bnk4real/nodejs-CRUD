const { Client } = require('pg');

// Create a new PostgreSQL client
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432, // Use the DB_PORT environment variable or default to 5432
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    // console.log('Connected to the PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to the PostgreSQL database', err);
  });

module.exports = client;