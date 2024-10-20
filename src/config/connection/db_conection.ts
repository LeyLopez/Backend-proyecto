import dotenv from 'dotenv';
import pgPromise from 'pg-promise';
import { optionsPG } from './optionsPG'; 

dotenv.config({path: 'variables.env'});

const db_name = String(process.env.DATABASE_NAME);
const user = String(process.env.USER);
const port = Number(process.env.PORT);
const server = String(process.env.SERVER);
const password = String(process.env.PASSWORD);

const pgp = pgPromise(optionsPG);

const pool = pgp({
    user: user,
    password: password,
    port: port,
    database: db_name,
    host: server
});


pool.connect().then((client) => {
    console.log(`Connected to the database, ${db_name}`);
    client.done();
}).catch((err) => {
    console.error("Error connecting to the database: ", err);
});

export default pool;