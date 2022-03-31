const {
    create,
    getUserByUserEmail

} = require("./user.service.js");

const {
    genSaltSync,
    hashSync,
    compareSync
} = require("bcrypt");

const {
    sign
} = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        console.log(body);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {

            console.log(results);

            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: -1,
                    message: "database connection error",
                    data: {}
                });
            }
            if (results.affectedRows == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "Not created user",
                    data: results
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Created user",
                data: results
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Invalid email or password",
                    token: "",
                    data: {}
                });
            }
            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({
                    result: results
                }, "qwe1234", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "login successfully",
                    token: jsontoken,
                    data: results
                });
            } else {
                return res.json({
                    success: 0,
                    message: "Invalid email or password",
                    token: "",
                    data: {}
                });
            }
        });
    }
}