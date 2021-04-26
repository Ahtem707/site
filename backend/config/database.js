import mysql from "mysql2";

const db = mysql.createConnection({
    host: 'localhost',
    port: '3308',
    database: 'liberfic',
    user: 'root',
    password: 'admin'
});

export default db;