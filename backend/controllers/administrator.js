import db from "../config/database.js";

var adminLogin = 'admin';
var adminPassword = 'admin';

export const administrator = (req, res) => {
    const data = req.body;
    if(data.session) console.log("session true")
    function response(err, results) {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.json(results)
        }
    }
    switch(data.method) {
        case 'showUsers':
            db.query(`
                SELECT
                    idUsers,
                    userName AS username,
                    email,
                    create_time AS 'createTime',
                    last_entry AS 'lastEntry',
                    reputation
                FROM users`,(e,r)=>response(e,r));
            break;
        case 'deleteUser':
            console.log(data.idUser)
            db.query(`
            DELETE
            FROM users
            WHERE idUsers = ${data.arguments.idUser}`,(e,r)=>response(e,r));
            break;
        case 'showBooks':
            db.query(`
                SELECT
                    idUsers,
                    userName AS username,
                    email,
                    create_time AS 'createTime',
                    last_entry AS 'lastEntry',
                    reputation
                FROM books`,(e,r)=>response(e,r));
            break;
        case 'login':
            if(data.arguments.login == adminLogin && data.arguments.password == adminPassword) {
                console.log("ok login")
                res.json(Math.floor(Math.random()*Math.pow(10,6)))
            } else {
                console.log("false login")
                res.send('error')
            }
            break;
        case 'getStatusWriting':
            db.query(`
            SELECT
                idStatusWriting AS id,
                status
            FROM StatusWriting`,(e,r)=>response(e,r));
            break;
        case 'deleteStatusWriting':
            db.query(`
            DELETE
            FROM StatusWriting
            WHERE idStatusWriting = ${data.arguments.id}`,(e,r)=>response(e,r));
            break;
        case 'createStatusWriting':
            db.query(`
            INSERT INTO StatusWriting(status)
            VALUE('${data.arguments.status}')`,(e,r)=>response(e,r));
            break;
        case 'getStatusReading':
            console.log('gsr')
            db.query(`
            SELECT
                idStatusReading AS id,
                status
            FROM StatusReading`,(e,r)=>response(e,r));
            break;
        case 'deleteStatusReading':
            db.query(`
            DELETE
            FROM StatusReading
            WHERE idStatusReading = ${data.arguments.id}`,(e,r)=>response(e,r));
            break;
        case 'createStatusReading':
            db.query(`
            INSERT INTO StatusReading(status)
            VALUE('${data.arguments.status}')`,(e,r)=>response(e,r));
            break;
    }
}