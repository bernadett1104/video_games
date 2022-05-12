const pool = require("../../config/database.js");

module.exports = {
    create: (data, callBack) => {
        let queryString = `
            Insert into users (firstname, lastname, email, password, gender, permission) values (?, ?, ?, ?, ?, 0)
        `
        let params = [data.firstname, data.lastname, data.email, data.password, data.gender, data.permission]
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
        const queryString = `Update users set firstname=?, lastname=?, email=?, password=?, gender=?, permission=? Where id=?`;
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
            Insert into categories (categoryName) values (?);
        `
        let params = [data.categoryName];
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
    getCategoriesABC: callBack => {
        const queryString = `Select categoryName, id from categories
                        Order by categoryName`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateCategory: (data, callBack) => {
        const queryString = `Update categories set categoryName=? Where id= ?`;
        const params = [
            data.categoryName,
            data.id
        ]
        console.log("Update category:", params);
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
            Insert into developers (developerName) values (?);
        `
        let params = [data.developerName];
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
    getDevelopersABC: callBack => {
        const queryString = `Select developerName, id from developers
        Order by developerName`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateDeveloper: (data, callBack) => {
        const queryString = `Update developers set developerName=? Where id= ?`;
        const params = [
            data.developerName,
            data.id
        ]
        console.log("Update developer:", params);
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
            Insert into platforms (platformName) values (?);
        `
        let params = [data.platformName];
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
    getplatformsABC: callBack => {
        const queryString = `Select platformName, id from platforms
                        Order by platformName`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updatePlatform: (data, callBack) => {
        const queryString = `Update platforms set platformName=? Where id= ?`;
        const params = [
            data.platformName,
            data.id
        ]
        console.log("Update platform:", params);
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
            Insert into games (developerId, gameName, categoryId, platformId) values (?, ?, ?, ?);
        `
        let params = [data.developerId, data.gameName, data.categoryId, data.platformId];
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
    getGamesABC: callBack => {
        const queryString = `Select gameName, id from games
        Order by gameName`;
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
        console.log("Update platform:", params);
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
    createGamelink: (data, callBack) => {
        let queryString = `
            Insert into gamelinks (gameId, link) values (?, ?);
        `
        let params = [data.gameId, data.link];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getGamelinks: callBack => {
        const queryString = `Select * from gamelinks`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getGamelinksById: (id, callBack) => {
        const queryString = `Select * from gamelinks Where id= ?`;
        const params = [id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    updateGamelink: (data, callBack) => {
        const queryString = `Update gamelinks set gameId=?, link=? Where id= ?`;
        const params = [
            data.gameId,
            data.link,
            data.id
        ]
        console.log("Update platform:", params);
        pool.query(queryString, params, (error, results, fields) => {
            console.log(params, queryString, results);
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    deleteGamelink: (data, callBack) => {
        const queryString = `Delete from gamelinks Where id = ?`;
        const params = [data.id];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    getAllName: callBack => {
        const queryString = `Select g.id id, d.id developerId, d.developerName, g.gameName, c.id categoryId, c.categoryName, p.id platformId, p.platformName from games g
                                Inner join platforms p on g.platformId = p.id
                                Inner join categories c on g.categoryId = c.id
                                Inner join developers d on g.developerId = d.id
                                Order by d.developerName`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
    getAllLinks: callBack => {
        const queryString = `Select gl.id id, gl.gameId gameId, g.gameName, gl.link from gamelinks gl
                            Inner join games g on gl.gameId = g.id
                            Order by g.gameName`;
        const params = [];
        pool.query(queryString, params, (error, results, fields) => {
            if (error) {
                return callBack(error);

            }
            return callBack(null, results);
        });
    },
};