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
        case 'createBook':
            console.log(data)
            db.query(`
            INSERT INTO books(title,annotation)
            VALUE('${data.arguments.title}','${data.arguments.annotation}')`,(e,r)=>response(e,r));
            break;
        
    }
}
