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

module.exports = router;