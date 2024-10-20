"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_promise_1 = __importDefault(require("pg-promise"));
const optionsPG_1 = require("./optionsPG");
dotenv_1.default.config({ path: 'variables.env' });
const db_name = String(process.env.DATABASE_NAME);
const user = String(process.env.USER);
const port = Number(process.env.PORT);
const server = String(process.env.SERVER);
const password = String(process.env.PASSWORD);
const pgp = (0, pg_promise_1.default)(optionsPG_1.optionsPG);
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
exports.default = pool;
