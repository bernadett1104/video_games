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
    getUsers: callBack => {
        const queryString = `select * from users`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getUserByUserId: (id, callBack) => {
        const queryString = `Select * from users Where id= ?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateUser: (data, callBack) => {
        const queryString = `Update users set name=?, email=?, password=?, permission=? Where id=?`;
        const params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    deleteUser: (data, callBack) => {
        const queryString = `Delete from users where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    createCategory: (data, callBack) => {
        let queryString = `
            Insert into categories (id, name) values (?, ?);
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getCategories: callBack => {
        const queryString = `Select * from categories`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getCategoriesById: (id, callBack) => {
        const queryString = `Select * from categories Where id= ?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateCategory: (data, callBack) => {
        const queryString = `Update categories set name=? Where id= ?`;
        const params = [
            data.name,
            data.id
        ]
        console.log("Update category:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    deleteCategory: (data, callBack) => {
        const queryString = `Delete from categories Where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    createDeveloper: (data, callBack) => {
        let queryString = `
            Insert into developers (id, developer) values (?, ?);
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getDevelopers: callBack => {
        const queryString = `Select * from developers`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getDevelopersById: (id, callBack) => {
        const queryString = `Select * from developers Where id= ?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateDeveloper: (data, callBack) => {
        const queryString = `Update developers set developer=? Where id= ?`;
        const params = [
            data.developer,
            data.id
        ]
        console.log("Update developer:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    deleteDeveloper: (data, callBack) => {
        const queryString = `Delete from developers Where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    createPlatform: (data, callBack) => {
        let queryString = `
            Insert into platforms (id, name) values (?, ?);
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getPlatforms: callBack => {
        const queryString = `Select * from platforms`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getPlatformsById: (id, callBack) => {
        const queryString = `Select * from platforms Where id= ?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updatePlatform: (data, callBack) => {
        const queryString = `Update platforms set name=? Where id= ?`;
        const params = [
            data.name,
            data.id
        ]
        console.log("Update platform:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    deletePlatform: (data, callBack) => {
        const queryString = `Delete from platforms Where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    createGame: (data, callBack) => {
        let queryString = `
            Insert into games (id, developerId, gameName, categoryId, platformId) values (?, ?, ?, ?, ?);
        `
        let params = Object.values(data);
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getGames: callBack => {
        const queryString = `Select * from games`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getGamesById: (id, callBack) => {
        const queryString = `Select * from games Where id= ?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateGame: (data, callBack) => {
        const queryString = `Update games set developerId=?, gameName=?, categoryId=?, platformId=? Where id= ?`;
        const params = [
            data.developerId,
            data.gameName,
            data.categoryId,
            data.platformId,
            data.id
        ]
        console.log("Update platform:",params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    deleteGame: (data, callBack) => {
        const queryString = `Delete from games Where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
};