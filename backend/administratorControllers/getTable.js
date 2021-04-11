import db from "../config/database.js";

export const showUsers = (req, res) => {
    db.query(`
    SELECT
           idUsers,
           userName AS username,
           email,
           create_time AS 'createTime',
           last_entry AS 'lastEntry',
           reputation
    FROM users`, (err, results) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.json(results)
        }
    })
}
