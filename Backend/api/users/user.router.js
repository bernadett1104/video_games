const {
    createUser,
    getUsers,
    getUserByUserId,
    updateUsers,
    deleteUser,
    createCategory,
    getCategories,
    getCategoriesById,
    updateCategory,
    deleteCategory,
    createDeveloper,
    getDevelopers,
    getDevelopersById,
    updateDeveloper,
    deleteDeveloper,
    createPlatform,
    getPlatforms,
    getPlatformsById,
    updatePlatform,
    deletePlatform,
    createGame,
    getGames,
    getGamesById,
    updateGame,
    deleteGame,
    login

} = require("./user.controller.js");

const router = require("express").Router();
const { checkToken } = require("../../vgames/token_validation");

router.post("/users/login", login);
router.post("/users/", checkToken, createUser);
router.get("/users/", checkToken, getUsers);
router.get("/users/:id", checkToken, getUserByUserId);
router.put("/users/", checkToken, updateUsers);
router.delete("/users/", checkToken, deleteUser);

router.post("/categories", checkToken, createCategory);
router.get("/categories", checkToken, getCategories);
router.get("/categories/:id", checkToken, getCategoriesById);
router.put("/categories/", checkToken, updateCategory);
router.delete("/categories/", checkToken, deleteCategory);

router.post("/developers", checkToken, createDeveloper);
router.get("/developers", checkToken, getDevelopers);
router.get("/developers/:id", checkToken, getDevelopersById);
router.put("/developers/", checkToken, updateDeveloper);
router.delete("/developers/", checkToken, deleteDeveloper);

router.post("/platforms", checkToken, createPlatform);
router.get("/platforms", checkToken, getPlatforms);
router.get("/platforms/:id", checkToken, getPlatformsById);
router.put("/platforms/", checkToken, updatePlatform);
router.delete("/platforms/", checkToken, deletePlatform);

router.post("/games", checkToken, createGame);
router.get("/games", checkToken, getGames);
router.get("/games/:id", checkToken, getGamesById);
router.put("/games/", checkToken, updateGame);
router.delete("/games/", checkToken, deleteGame);

module.exports = router;