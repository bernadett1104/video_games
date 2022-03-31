const pool = require("../../config/database.js");

module.exports = {
    create: (data, callBack) => {
        let queryString = `
            Insert into users (name, email, password, permission) values (?, ?, ?, ?)
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUserByUserEmail: (email, callBack) => {
        let queryString = `select * from users where email = ?`;
        let params = [email];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        });
    },
};