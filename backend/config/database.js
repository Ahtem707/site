import mysql from "mysql2";

const db = mysql.createConnection({
    host: 'localhost',
    port: '3308',
    database: 'closed library of free writers',
    // database: 'pos_db',
    user: 'root',
    password: 'admin'
});

export default db;