import db from "../config/database.js";

export const main = (req, res) => {
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
        case 'getUsers':
            break
        case 'createUser':
            db.query(`
            INSERT INTO users(userName,email,password)
            VALUE('${data.arguments.name}','${data.arguments.email}','${data.arguments.password}');`,(err, results) => {             
                if(err) {
                    console.log(err);
                    res.send(err)
                } else {
                    res.json(results)
                }
            })
            break
        case 'getBooks':
            db.query(`
            SELECT
                b.title,
                b.annotation,
                u.userName AS author
            FROM
                books AS b,
                users AS u
            WHERE
                u.idUsers = b.Users_idUsers`,(e,r)=>response(e,r));
            break;       
        case 'createBook':
            db.query(`
            INSERT INTO books(title,annotation,Users_idUsers)
            VALUE('${data.arguments.title}','${data.arguments.annotation}','${data.arguments.user}')`,(e,r)=>response(e,r));
            break;
    }
}
