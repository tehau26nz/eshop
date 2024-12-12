import dotenv from 'dotenv';
import pg from 'pg';
dotenv.config();
const { Client } = pg;

// Extract connection details from POSTGRES_URL if available, otherwise use individual variables
const connectionString = process.env.POSTGRES_URL;

let client;

if (connectionString) {
    client = new Client({
        connectionString: connectionString
    });
} else {
    client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DATABASE,
        password: process.env.POSTGRES_PASSWORD,
        // Port is often included in the URL, but if not, you might need to add:
        port: process.env.POSTGRES_PORT || 5432,
    });
}


client.connect()
    .then(() => {
        console.log("Connected to database");
    })
    .catch(err => {
        console.error("Error connecting to database:", err);
    });

export default client;